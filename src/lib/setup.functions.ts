import { createServerFn } from "@tanstack/react-start";

/**
 * Cria (uma única vez) os acessos iniciais da Central.
 * Idempotente: se o e-mail já existe, nada é alterado.
 */
export const seedInitialUsers = createServerFn({ method: "POST" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { SEED_USERS } = await import("./seed-users");

  const created: string[] = [];
  const skipped: string[] = [];

  const { data: existing } = await supabaseAdmin.auth.admin.listUsers({
    page: 1,
    perPage: 200,
  });
  const existingEmails = new Set(
    (existing?.users ?? []).map((u) => (u.email ?? "").toLowerCase()),
  );

  for (const user of SEED_USERS) {
    if (existingEmails.has(user.email.toLowerCase())) {
      skipped.push(user.email);
      continue;
    }

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: user.email,
      password: user.password,
      email_confirm: true,
      user_metadata: { nome: user.nome, cargo: user.cargo },
    });

    if (error || !data.user) {
      throw new Error(`Falha ao criar ${user.email}: ${error?.message ?? "desconhecido"}`);
    }

    await supabaseAdmin
      .from("profiles")
      .upsert({ id: data.user.id, email: user.email, nome: user.nome, cargo: user.cargo });
    await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: data.user.id, role: user.role }, { onConflict: "user_id,role" });

    created.push(user.email);
  }

  return { created, skipped };
});
