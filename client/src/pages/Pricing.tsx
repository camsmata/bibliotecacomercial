import { products } from "@/lib/content";
import { DollarSign, Check, TrendingUp, Info } from "lucide-react";

export default function Pricing() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start gap-3">
        <div className="mt-1 h-8 w-0.5 shrink-0 rounded-full bg-[#5AA6A6]" />
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">módulo</span>
            <span className="font-mono text-[10px] text-muted-foreground/40">·</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">financeiro</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Precificação</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Tabela completa de preços e planos de todos os produtos Microsistec
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
          <DollarSign className="h-3.5 w-3.5 text-[#5AA6A6]" />
          <span className="font-mono text-xs text-[#7CC1C1]">tabela vigente</span>
        </div>
      </div>

      {/* Pricing table */}
      <div className="overflow-hidden rounded-xl border border-[#5AA6A6]/10">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#5AA6A6]/10 bg-[#0D1F1E]">
                <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">#</th>
                <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-[#7CC1C1]">Produto</th>
                <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-[#7CC1C1]">Categoria</th>
                <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-[#7CC1C1]">Precificação</th>
                <th className="hidden px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-[#7CC1C1] lg:table-cell">Público-Alvo</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr
                  key={product.id}
                  className={`border-b border-[#5AA6A6]/8 transition-colors hover:bg-[#5AA6A6]/5 ${
                    idx % 2 === 0 ? "bg-[#0A1A1A]/20" : ""
                  }`}
                >
                  <td className="px-4 py-3.5">
                    <span className="font-mono text-[10px] text-[#5AA6A6]/40">{String(idx + 1).padStart(2, "0")}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-medium text-foreground">{product.name}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="rounded-md border border-[#5AA6A6]/15 bg-[#5AA6A6]/8 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#7CC1C1]">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-muted-foreground">{product.pricing}</td>
                  <td className="hidden px-4 py-3.5 text-sm text-muted-foreground lg:table-cell">
                    {product.targetAudience}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing cards */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-0.5 rounded-full bg-[#5AA6A6]" />
          <h2 className="font-display text-lg font-semibold text-foreground">Visão por Planos</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const tiers = product.pricing.split("|").map((t) => t.trim());
            return (
              <div key={product.id} className="glass-card rounded-xl p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#5AA6A6]/50">{String(index + 1).padStart(2, "0")}</span>
                  <div className="h-px flex-1 bg-[#5AA6A6]/10" />
                </div>
                <h3 className="mb-4 font-display text-sm font-semibold text-foreground">{product.name}</h3>
                <div className="space-y-2.5">
                  {tiers.map((tier, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                        <Check className="h-3 w-3 text-[#5AA6A6]" />
                      </div>
                      <span className="text-sm text-muted-foreground">{tier}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info note */}
      <div className="flex items-start gap-3 rounded-xl border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 p-4">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5AA6A6]/10">
          <Info className="h-4 w-4 text-[#5AA6A6]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Política de Precificação</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Os valores podem variar conforme volume de usuários, personalizações e contratos anuais.
            Para propostas customizadas, consulte o time comercial. Descontos de 10% a 20% aplicáveis
            para contratos anuais pagos à vista.
          </p>
        </div>
      </div>
    </div>
  );
}
