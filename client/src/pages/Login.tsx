import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { MicrosistecLogo } from "@/components/MicrosistecLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock, Mail, ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const { signIn, isDemoMode } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await signIn(email, password);
    if (error) {
      setError(error);
    }
    setLoading(false);
  };

  const fillDemo = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/manus-storage/login-bg_2778fe58.png)" }}
      />
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient orbs */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#5AA6A6]/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#7CC1C1]/10 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2B5250]/8 blur-[150px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <MicrosistecLogo className="scale-125" />
          </div>

          {/* Login card */}
          <div className="glass border-glow rounded-2xl p-8 shadow-2xl">
            <div className="mb-6 text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/20">
                <ShieldCheck className="h-6 w-6 text-[#5AA6A6]" />
              </div>
              <h1 className="font-display text-2xl font-semibold text-foreground">
                Central de Inteligência Comercial
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Acesso restrito a colaboradores autorizados
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  E-mail corporativo
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.nome@microsistec.com.br"
                    className="border-[#5AA6A6]/15 bg-[#0A1A1A]/60 pl-10 text-foreground placeholder:text-muted-foreground/50 focus:border-[#5AA6A6]/40 focus:ring-[#5AA6A6]/20"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="border-[#5AA6A6]/15 bg-[#0A1A1A]/60 pl-10 pr-10 text-foreground placeholder:text-muted-foreground/50 focus:border-[#5AA6A6]/40 focus:ring-[#5AA6A6]/20"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-[#5AA6A6]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5AA6A6] text-[#0A1A1A] font-semibold transition-all hover:bg-[#7CC1C1] hover:shadow-[0_0_24px_rgba(90,166,166,0.3)] active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Autenticando...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>

            {isDemoMode && (
              <div className="mt-6 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 p-4">
                <p className="mb-3 text-xs font-medium text-[#7CC1C1]">
                  Modo Demonstração — Credenciais de teste:
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() => fillDemo("camila@microsistec.com.br", "Microsistec@2026")}
                    className="flex w-full items-center justify-between rounded-md bg-[#0A1A1A]/40 px-3 py-2 text-left text-xs transition-colors hover:bg-[#0A1A1A]/70"
                  >
                    <span className="text-muted-foreground">Master:</span>
                    <span className="font-mono text-[#7CC1C1]">camila@microsistec.com.br</span>
                  </button>
                  <button
                    onClick={() => fillDemo("comercial@microsistec.com.br", "Comercial@2026")}
                    className="flex w-full items-center justify-between rounded-md bg-[#0A1A1A]/40 px-3 py-2 text-left text-xs transition-colors hover:bg-[#0A1A1A]/70"
                  >
                    <span className="text-muted-foreground">Comercial:</span>
                    <span className="font-mono text-[#7CC1C1]">comercial@microsistec.com.br</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground/60">
            Microsistec © 2026 — Central de Inteligência Comercial
          </p>
        </div>
      </div>
    </div>
  );
}
