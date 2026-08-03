import { icpData } from "@/lib/content";
import { Target, Users, TrendingUp, Building2, Briefcase, Monitor, Package } from "lucide-react";

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Porte": Building2,
  "Estrutura Comercial": Briefcase,
  "Maturidade Digital": Monitor,
  "Necessidades": Package,
};

export default function ICP() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-start gap-3">
          <div className="mt-1 h-8 w-0.5 shrink-0 rounded-full bg-[#5AA6A6]" />
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">módulo</span>
              <span className="font-mono text-[10px] text-muted-foreground/40">·</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">inteligência</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Perfil Ideal de Cliente (ICP)</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Definição do cliente ideal para maximizar conversão e identificar oportunidades de cross-sell
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
            <Target className="h-3.5 w-3.5 text-[#5AA6A6]" />
            <span className="font-mono text-xs text-[#7CC1C1]">ICP definido</span>
          </div>
        </div>
      </div>

      {/* ICP sections */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {icpData.sections.map((section) => {
          const Icon = sectionIcons[section.label] || Users;
          return (
            <div key={section.label} className="glass-card rounded-xl p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                  <Icon className="h-5 w-5 text-[#5AA6A6]" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{section.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{section.value}</p>
            </div>
          );
        })}
      </div>

      {/* Cross-sell opportunities */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-[#5AA6A6]" />
          <h2 className="font-display text-xl font-semibold text-foreground">
            Perfil com Maior Potencial de Cross-Sell
          </h2>
        </div>
        <div className="space-y-3">
          {icpData.crossSell.map((item, idx) => (
            <div key={idx} className="glass-card flex items-start gap-4 rounded-xl p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                <Package className="h-5 w-5 text-[#5AA6A6]" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-[#7CC1C1]">{item.product}</h3>
                <p className="text-sm text-muted-foreground">{item.opportunity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunity signals */}
      <div className="relative overflow-hidden rounded-2xl border border-[#5AA6A6]/10 bg-gradient-to-br from-[#0D1F1E] to-[#1B2A2A] p-6">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#5AA6A6]/8 blur-[60px]" />
        <div className="relative z-10">
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Sinais de Oportunidade</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-[#5AA6A6]/10 bg-[#0A1A1A]/40 p-4">
              <h3 className="mb-1.5 text-sm font-semibold text-[#7CC1C1]">Oportunidade para Albert (IA)</h3>
              <p className="text-sm text-muted-foreground">
                Cliente com mais de 50 leads/mês, alto tempo de resposta ou baixa taxa de conversão no primeiro contato.
              </p>
            </div>
            <div className="rounded-xl border border-[#5AA6A6]/10 bg-[#0A1A1A]/40 p-4">
              <h3 className="mb-1.5 text-sm font-semibold text-[#7CC1C1]">Oportunidade para Site V8</h3>
              <p className="text-sm text-muted-foreground">
                Cliente enterprise com necessidade de diferenciação digital, site desatualizado ou baixa performance mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
