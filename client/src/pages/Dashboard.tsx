import { strategicPillars, products, commercialProcesses } from "@/lib/content";
import { useLocation } from "wouter";
import {
  Package,
  GitBranch,
  Target,
  TrendingUp,
  ArrowRight,
  Sparkles,
  DollarSign,
  Award,
  Lightbulb,
  ChevronRight,
  Activity,
  Zap,
} from "lucide-react";

// Microsistec "M" geometric motif as SVG
function MicrosistecMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 70L30 30L40 50L50 30L70 70" stroke="rgba(90,166,166,0.15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 70L30 30L40 50L50 30L70 70" stroke="rgba(90,166,166,0.08)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const quickLinks = [
  { label: "Cardápio de Produtos", path: "/app/produtos", icon: Package, count: `${products.length} soluções`, color: "from-[#5AA6A6]/15 to-[#2B5250]/10" },
  { label: "Processos Comerciais", path: "/app/processos", icon: GitBranch, count: `${commercialProcesses.length} processos`, color: "from-[#7CC1C1]/10 to-[#2B5250]/5" },
  { label: "Perfil Ideal de Cliente", path: "/app/icp", icon: Target, count: "ICP definido", color: "from-[#5AA6A6]/12 to-transparent" },
  { label: "Precificação", path: "/app/precificacao", icon: DollarSign, count: "Tabelas ativas", color: "from-[#7CC1C1]/12 to-transparent" },
  { label: "Diferenciais", path: "/app/diferenciais", icon: Award, count: "Vantagens competitivas", color: "from-[#5AA6A6]/10 to-transparent" },
  { label: "Nossa Essência", path: "/app/essencia", icon: Lightbulb, count: "Missão e valores", color: "from-[#7CC1C1]/10 to-transparent" },
];

export default function Dashboard() {
  const [, navigate] = useLocation();

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative overflow-hidden rounded-2xl border border-[#5AA6A6]/15 bg-gradient-to-br from-[#0D2422] via-[#0D1F1E] to-[#0A1A1A] p-8 lg:p-10">
        {/* Background motifs */}
        <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-[#5AA6A6]/6 blur-[100px]" />
        <div className="absolute -bottom-20 left-1/4 h-60 w-60 rounded-full bg-[#7CC1C1]/4 blur-[80px]" />
        <MicrosistecMotif className="absolute right-8 top-8 h-48 w-48 opacity-60" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-60 rounded-2xl" />

        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5AA6A6]/25 bg-[#5AA6A6]/8 px-3.5 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#5AA6A6] glow-teal animate-pulse" />
            <span className="font-mono text-[11px] font-medium tracking-widest text-[#7CC1C1] uppercase">
              Central de Inteligência Comercial
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl xl:text-5xl">
            Bem-vindo à{" "}
            <span className="gradient-teal">Central de Inteligência</span>
            <br className="hidden sm:block" />
            <span className="text-foreground"> da Microsistec</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tudo sobre produtos, precificação, processos comerciais e diferenciais em um único lugar.
            Navegue pelo menu lateral ou use a busca para encontrar rapidamente o que precisa.
          </p>

          {/* Status bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
              <Activity className="h-3.5 w-3.5 text-[#5AA6A6]" />
              <span className="font-mono text-xs text-[#7CC1C1]">{products.length} produtos ativos</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
              <Zap className="h-3.5 w-3.5 text-[#5AA6A6]" />
              <span className="font-mono text-xs text-[#7CC1C1]">{commercialProcesses.length} processos documentados</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#5AA6A6]" />
              <span className="font-mono text-xs text-[#7CC1C1]">Atualizado 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick navigation grid */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-0.5 rounded-full bg-[#5AA6A6]" />
            <h2 className="font-display text-lg font-semibold text-foreground">Acesso Rápido</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">6 módulos disponíveis</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`group relative overflow-hidden rounded-xl border border-[#5AA6A6]/10 bg-gradient-to-br ${link.color} p-5 text-left transition-all duration-200 hover:border-[#5AA6A6]/25 hover:shadow-[0_0_20px_rgba(90,166,166,0.08)] hover:scale-[1.02] active:scale-[0.99]`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5AA6A6]/12 ring-1 ring-[#5AA6A6]/20">
                    <Icon className="h-5 w-5 text-[#5AA6A6]" />
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-[#5AA6A6]" />
                </div>
                <div className="mt-3">
                  <p className="font-display text-sm font-semibold text-foreground">{link.label}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{link.count}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Strategic pillars */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-0.5 rounded-full bg-[#5AA6A6]" />
          <TrendingUp className="h-4 w-4 text-[#5AA6A6]" />
          <h2 className="font-display text-lg font-semibold text-foreground">Pilares Estratégicos</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {strategicPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="glass-card group rounded-xl p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#5AA6A6]/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-[#5AA6A6]/10" />
              </div>
              <h3 className="mb-2 font-display text-sm font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{pillar.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {pillar.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-md border border-[#5AA6A6]/12 bg-[#5AA6A6]/6 px-2 py-0.5 font-mono text-[10px] text-[#7CC1C1]"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative overflow-hidden rounded-xl border border-[#5AA6A6]/15 bg-gradient-to-r from-[#0D2422] to-[#0A1A1A] p-6">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#5AA6A6]/5 to-transparent" />
        <MicrosistecMotif className="absolute right-4 top-1/2 h-20 w-20 -translate-y-1/2 opacity-40" />
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-semibold text-foreground">
              Precisa de algo específico?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Use a barra de busca no topo para localizar qualquer conteúdo instantaneamente.
            </p>
          </div>
          <button
            onClick={() => {
              const input = document.querySelector<HTMLInputElement>('input[type="text"]');
              input?.focus();
            }}
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#5AA6A6] px-4 py-2.5 text-sm font-semibold text-[#0A1A1A] transition-all hover:bg-[#7CC1C1] hover:shadow-[0_0_20px_rgba(90,166,166,0.3)] active:scale-[0.98]"
          >
            <ArrowRight className="h-4 w-4" />
            Buscar conteúdo
          </button>
        </div>
      </div>
    </div>
  );
}
