import { useState } from "react";
import { commercialProcesses, type CommercialProcess } from "@/lib/content";
import {
  GitBranch,
  Target,
  Users,
  Wrench,
  ChevronRight,
  Clock,
  XCircle,
  ArrowRightCircle,
  BarChart3,
} from "lucide-react";

export default function Processes() {
  const [activeProcess, setActiveProcess] = useState<CommercialProcess>(commercialProcesses[0]);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-start gap-3">
          <div className="mt-1 h-8 w-0.5 shrink-0 rounded-full bg-[#5AA6A6]" />
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">módulo</span>
              <span className="font-mono text-[10px] text-muted-foreground/40">·</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">operacional</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Processos Comerciais</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Estrutura completa dos funis comerciais com SLAs, gatilhos e indicadores
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
            <GitBranch className="h-3.5 w-3.5 text-[#5AA6A6]" />
            <span className="font-mono text-xs text-[#7CC1C1]">{commercialProcesses.length} processos</span>
          </div>
        </div>
      </div>

      {/* Process selector tabs */}
      <div className="flex flex-wrap gap-2">
        {commercialProcesses.map((process) => (
          <button
            key={process.id}
            onClick={() => setActiveProcess(process)}
            className={`
              rounded-lg px-4 py-2.5 text-sm font-medium transition-all
              ${activeProcess.id === process.id
                ? "bg-[#5AA6A6]/10 text-[#5AA6A6] ring-1 ring-[#5AA6A6]/20"
                : "bg-[#0A1A1A]/40 text-muted-foreground hover:bg-[#5AA6A6]/5 hover:text-foreground"
              }
            `}
          >
            {process.name}
          </button>
        ))}
      </div>

      {/* Process details */}
      <div className="space-y-6">
        {/* Overview cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card rounded-xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <Target className="h-4 w-4 text-[#5AA6A6]" />
              <span className="text-xs font-medium uppercase tracking-wide text-[#7CC1C1]">Objetivo</span>
            </div>
            <p className="text-sm text-muted-foreground">{activeProcess.objective}</p>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-[#5AA6A6]" />
              <span className="text-xs font-medium uppercase tracking-wide text-[#7CC1C1]">Público-Alvo</span>
            </div>
            <p className="text-sm text-muted-foreground">{activeProcess.targetAudience}</p>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-[#5AA6A6]" />
              <span className="text-xs font-medium uppercase tracking-wide text-[#7CC1C1]">Estratégia</span>
            </div>
            <p className="text-sm text-muted-foreground">{activeProcess.strategy}</p>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-[#5AA6A6]" />
              <span className="text-xs font-medium uppercase tracking-wide text-[#7CC1C1]">Ferramenta</span>
            </div>
            <p className="text-sm text-muted-foreground">{activeProcess.tool}</p>
          </div>
        </div>

        {/* Funnel steps */}
        <div>
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Funil Comercial</h2>
          <div className="space-y-3">
            {activeProcess.steps.map((step, idx) => (
              <div key={step.id} className="glass-card rounded-xl p-5">
                <div className="flex items-start gap-4">
                  {/* Step number */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5AA6A6]/10 font-display text-lg font-bold text-[#5AA6A6] ring-1 ring-[#5AA6A6]/15">
                    {idx + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-display text-base font-semibold text-foreground">
                      {step.name}
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground">{step.description}</p>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      <div className="flex items-start gap-2 rounded-lg bg-[#0A1A1A]/30 px-3 py-2">
                        <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5AA6A6]" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">SLA</p>
                          <p className="text-xs text-foreground">{step.sla}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 rounded-lg bg-[#0A1A1A]/30 px-3 py-2">
                        <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400/70" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Descarte</p>
                          <p className="text-xs text-foreground">{step.discardCriteria}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 rounded-lg bg-[#0A1A1A]/30 px-3 py-2">
                        <ArrowRightCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5AA6A6]" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Gatilho de Avanço</p>
                          <p className="text-xs text-foreground">{step.advanceTrigger}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {idx < activeProcess.steps.length - 1 && (
                    <ChevronRight className="hidden h-5 w-5 shrink-0 text-muted-foreground/30 lg:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div>
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Indicadores do Processo</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeProcess.indicators.map((indicator, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4">
                <div className="mb-1.5 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#5AA6A6] glow-teal" />
                  <h3 className="text-sm font-semibold text-foreground">{indicator.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
