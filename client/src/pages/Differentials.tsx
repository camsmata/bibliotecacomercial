import { products, valueProposition } from "@/lib/content";
import { Award, Check, Zap, Shield, BarChart3, Layers } from "lucide-react";

const globalDifferentials = [
  {
    icon: Zap,
    title: "Integração Total",
    description: "Todos os produtos se conectam nativamente. Lead capturado no Site Integrado cai direto no CRM, é qualificado pelo Albert e acompanhado pelo App de Leads.",
  },
  {
    icon: Shield,
    title: "Segurança e Confiabilidade",
    description: "Plataforma com criptografia ponta a ponta, backups automáticos e conformidade com LGPD. Seus dados e de seus clientes sempre protegidos.",
  },
  {
    icon: BarChart3,
    title: "Dados em Tempo Real",
    description: "Dashboards com indicadores comerciais atualizados em tempo real. Decisões baseadas em dados, não em achismos.",
  },
  {
    icon: Layers,
    title: "Ecossistema Completo",
    description: "Da captação do lead ao pós-venda. Tudo em uma única plataforma, sem necessidade de múltiplas ferramentas dispersas.",
  },
];

export default function Differentials() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-start gap-3">
        <div className="mt-1 h-8 w-0.5 shrink-0 rounded-full bg-[#5AA6A6]" />
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">módulo</span>
            <span className="font-mono text-[10px] text-muted-foreground/40">·</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">estratégia</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Diferenciais Competitivos</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            O que torna a Microsistec a escolha certa para gestão comercial imobiliária
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
          <Award className="h-3.5 w-3.5 text-[#5AA6A6]" />
          <span className="font-mono text-xs text-[#7CC1C1]">vantagens competitivas</span>
        </div>
      </div>

      {/* Value proposition */}
      <div className="relative overflow-hidden rounded-2xl border border-[#5AA6A6]/15 bg-gradient-to-br from-[#0D2422] via-[#0D1F1E] to-[#0A1A1A] p-8">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#5AA6A6]/8 blur-[60px]" />
        <div className="absolute inset-0 grid-bg opacity-40 rounded-2xl" />
        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#5AA6A6]/20 bg-[#5AA6A6]/8 px-3 py-1">
            <Award className="h-3.5 w-3.5 text-[#5AA6A6]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#7CC1C1]">Proposta de Valor</span>
          </div>
          <h2 className="mb-3 font-display text-2xl font-bold text-foreground">{valueProposition.title}</h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-muted-foreground">{valueProposition.description}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {valueProposition.pillars.map((pillar, index) => (
              <div key={pillar.title} className="rounded-xl border border-[#5AA6A6]/12 bg-[#0A1A1A]/50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#5AA6A6]/50">{String(index + 1).padStart(2, "0")}</span>
                  <div className="h-px flex-1 bg-[#5AA6A6]/10" />
                </div>
                <h3 className="mb-2 font-display text-sm font-semibold text-[#7CC1C1]">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global differentials */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-0.5 rounded-full bg-[#5AA6A6]" />
          <h2 className="font-display text-lg font-semibold text-foreground">Diferenciais Globais da Plataforma</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {globalDifferentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div key={diff.title} className="glass-card rounded-xl p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                    <Icon className="h-5 w-5 text-[#5AA6A6]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#5AA6A6]/40">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{diff.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Per-product differentials */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-0.5 rounded-full bg-[#5AA6A6]" />
          <h2 className="font-display text-lg font-semibold text-foreground">Diferenciais por Produto</h2>
        </div>
        <div className="space-y-4">
          {products.map((product, pIndex) => (
            <div key={product.id} className="glass-card rounded-xl p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#5AA6A6]/50">{String(pIndex + 1).padStart(2, "0")}</span>
                <div className="h-px w-4 bg-[#5AA6A6]/15" />
                <h3 className="font-display text-sm font-semibold text-foreground">{product.name}</h3>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {product.differentials.map((diff, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-lg border border-[#5AA6A6]/8 bg-[#0A1A1A]/30 px-3 py-2.5">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                      <Check className="h-3 w-3 text-[#5AA6A6]" />
                    </div>
                    <span className="text-sm text-muted-foreground">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
