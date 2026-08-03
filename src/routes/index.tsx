import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Loader2, Lock, Mail, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central de Inteligência Comercial | Microsistec" },
      {
        name: "description",
        content:
          "Acesso restrito à Central de Inteligência Comercial da Microsistec: processos, produtos, precificação e argumentação comercial.",
      },
      { property: "og:title", content: "Central de Inteligência Comercial | Microsistec" },
      {
        property: "og:description",
        content:
          "Plataforma interna da Microsistec com processos comerciais, produtos, precificação e diferenciais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/central" });
    });
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    setLoading(false);

    if (error) {
      toast.error("Não foi possível entrar", {
        description: "Verifique o e-mail e a senha e tente novamente.",
      });
      return;
    }

    toast.success("Acesso liberado");
    navigate({ to: "/central" });
  }

  return (
    <main className="grid-tech relative min-h-screen overflow-hidden">
      <div className="aurora absolute inset-0" />

      <div className="absolute top-5 right-5 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-12 px-6 py-16 lg:flex-row lg:items-center">
        <section className="rise flex-1 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span className="pulse-ring size-1.5 rounded-full bg-primary" />
            Microsistec · Acesso interno
          </div>

          <h1 className="max-w-xl text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
            Central de <span className="text-gradient">Inteligência Comercial</span>
          </h1>

          <p className="max-w-lg text-base text-muted-foreground">
            Tudo que o time comercial precisa em um só lugar: processos, produtos, precificação,
            ICP, diferenciais, objeções e indicadores — com busca instantânea.
          </p>

          <ul className="grid max-w-lg gap-3 sm:grid-cols-2">
            {[
              "Playbook comercial completo",
              "Precificação e alçadas",
              "Biblioteca de objeções",
              "Funis CPR e Inbound",
            ].map((item) => (
              <li
                key={item}
                className="panel surface-hover flex items-center gap-2 px-4 py-3 text-sm"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rise w-full lg:max-w-md">
          <div className="panel glow-teal p-8">
            <div className="mb-7 space-y-1.5">
              <h2 className="text-xl font-semibold tracking-tight">Entrar na plataforma</h2>
              <p className="text-sm text-muted-foreground">
                Ambiente restrito a colaboradores Microsistec.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail corporativo</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="nome@microsistec.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 bg-surface/70 pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 bg-surface/70 pl-9"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="group h-11 w-full text-sm font-semibold"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <>
                    Acessar a Central
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 flex items-start gap-2 rounded-lg border border-border bg-surface/50 p-3 text-xs text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              <p>
                Sessão criptografada e acesso individual. Não compartilhe suas credenciais — cada
                colaborador deve ter o próprio usuário.
              </p>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Problemas de acesso? Fale com a liderança comercial.{" "}
              <Link to="/" className="text-primary hover:underline">
                Recarregar
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
