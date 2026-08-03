import { useState } from "react";
import { products, type Product } from "@/lib/content";
import {
  Building2,
  Globe,
  Smartphone,
  Brain,
  Layout,
  Check,
  Users,
  Tag,
  Package,
  ArrowRight,
  X,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  globe: Globe,
  smartphone: Smartphone,
  brain: Brain,
  layout: Layout,
};

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start gap-3">
        <div className="mt-1 h-8 w-0.5 shrink-0 rounded-full bg-[#5AA6A6]" />
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">módulo</span>
            <span className="font-mono text-[10px] text-muted-foreground/40">·</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">portfólio</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Cardápio de Produtos</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Portfólio completo de soluções da Microsistec para o mercado imobiliário
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-3 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#5AA6A6] animate-pulse" />
          <span className="font-mono text-xs text-[#7CC1C1]">{products.length} soluções</span>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const Icon = iconMap[product.icon] || Package;
          return (
            <button
              key={product.id}
              onClick={() => setSelected(product)}
              className="glass-card group flex flex-col rounded-xl p-5 text-left transition-all hover:scale-[1.02]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#5AA6A6]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-md border border-[#5AA6A6]/15 bg-[#5AA6A6]/8 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#7CC1C1]">
                  {product.category}
                </span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                <Icon className="h-6 w-6 text-[#5AA6A6]" />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#5AA6A6]">
                <span>Ver detalhes</span>
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Product detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div
            className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#5AA6A6]/20 bg-[#0D1F1E] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#5AA6A6]/10 bg-[#0D1F1E]/95 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = iconMap[selected.icon] || Package;
                  return (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                      <Icon className="h-6 w-6 text-[#5AA6A6]" />
                    </div>
                  );
                })()}
                <div>
                  <div className="mb-0.5 flex items-center gap-2">
                    <span className="rounded-md border border-[#5AA6A6]/15 bg-[#5AA6A6]/8 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#7CC1C1]">
                      {selected.category}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">{selected.name}</h2>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#5AA6A6]/10 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{selected.description}</p>

              {/* Pricing */}
              <div className="rounded-xl border border-[#5AA6A6]/15 bg-[#0A1A1A]/60 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-[#5AA6A6]" />
                  <h3 className="text-sm font-semibold text-foreground">Precificação</h3>
                </div>
                <p className="font-mono text-sm text-[#7CC1C1]">{selected.pricing}</p>
              </div>

              {/* Differentials */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-0.5 rounded-full bg-[#5AA6A6]" />
                  <h3 className="text-sm font-semibold text-foreground">Principais Diferenciais</h3>
                </div>
                <div className="space-y-2">
                  {selected.differentials.map((diff, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#5AA6A6]/10 ring-1 ring-[#5AA6A6]/15">
                        <Check className="h-3 w-3 text-[#5AA6A6]" />
                      </div>
                      <span className="text-sm text-muted-foreground">{diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target audience */}
              <div className="rounded-xl border border-[#5AA6A6]/15 bg-[#0A1A1A]/60 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#5AA6A6]" />
                  <h3 className="text-sm font-semibold text-foreground">Público-Alvo</h3>
                </div>
                <p className="text-sm text-muted-foreground">{selected.targetAudience}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
