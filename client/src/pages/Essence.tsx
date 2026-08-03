import { valueProposition, strategicPillars } from "@/lib/content";
import { Lightbulb, TrendingUp, Target, Users, BarChart3, Layers } from "lucide-react";

const pillarIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "crescimento-receita": TrendingUp,
  "excelencia-operacional": Target,
  "performance-comercial": BarChart3,
  "gestao-indicadores": Layers,
  "desenvolvimento-equipe": Users,
  "inteligencia-comercial": Lightbulb,
};

export default function Essence() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-start gap-3">
          <div className="mt-1 h-8 w-0.5 shrink-0 rounded-full bg-[#5AA6A6]" />
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">módulo</span>
              <span className="font-mono text-[10px] text-muted-foreground/40">·</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">identidade</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Nossa Essência</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Promessa de valor e pilares estratégicos que guiam a Microsistec
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
            <Lightbulb className="h-3.5 w-3.5 text-[#5AA6A6]" />
            <span className="font-mono text-xs text-[#7CC1C1]">missão e valores</span>
          </div>
        </div>
      </div>

      {/* Value proposition hero */}
      <div className="relative overflow-hidden rounded-2xl border border-[#5AA6A6]/10 bg-gradient-to-br from-[#0D1F1E] via-[#0D1F1E] to-[#1B2A2A] p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#5AA6A6]/8 blur-[80px]" />
        <div className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-[#7CC1C1]/5 blur-[60px]" />

        <div className="relative z-10">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{valueProposition.title}</h2>
          <p className="mb-6 max-w-3xl text-base text-muted-foreground">{valueProposition.description}</p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {valueProposition.pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-[#5AA6A6]/10 bg-[#0A1A1A]/40 p-5">
                <h3 className="mb-2 font-display text-base font-semibold text-[#7CC1C1]">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic pillars */}
      <div>
        <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
          Onde Queremos Chegar — Pilares Estratégicos
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {strategicPillars.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || Target;
            return (
              <div key={pillar.id} className="glass-card rounded-xl p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                  <Icon className="h-5 w-5 text-[#5AA6A6]" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{pillar.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{pillar.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-md bg-[#5AA6A6]/8 px-2 py-1 text-[10px] font-medium text-[#7CC1C1]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission statement */}
      <div className="relative overflow-hidden rounded-2xl border border-[#5AA6A6]/10 bg-[#0D1F1E] p-8 text-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <blockquote className="font-display text-xl font-medium text-foreground lg:text-2xl">
            "Transformamos a gestão comercial de imobiliárias através de tecnologia, entregando não apenas
            software, mas um <span className="gradient-teal">ecossistema completo</span> que potencializa resultados."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
