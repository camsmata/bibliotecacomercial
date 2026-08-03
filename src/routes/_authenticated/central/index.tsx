import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Gauge, Zap } from "lucide-react";
import { GROUPS, SECTIONS } from "@/content/library";
import { SectionIcon } from "./route";

export const Route = createFileRoute("/_authenticated/central/")({
  head: () => ({
    meta: [
      { title: "Painel | Central de Inteligência Comercial Microsistec" },
      {
        name: "description",
        content:
          "Painel da Central de Inteligência Comercial: acesso rápido a processos, produtos, precificação e argumentação.",
      },
      { property: "og:title", content: "Painel | Central de Inteligência Comercial" },
      {
        property: "og:description",
        content: "Acesso rápido aos conteúdos-chave da operação comercial Microsistec.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CentralHome,
});

const HIGHLIGHTS = [
  { icon: Zap, label: "SLA 1º contato", value: "15 min", hint: "Leads inbound" },
  { icon: Clock, label: "Potencial Cliente", value: "3 dias", hint: "Permanência máxima" },
  { icon: Gauge, label: "CRM oficial", value: "Pipedrive", hint: "Registro obrigatório" },
];

function CentralHome() {
  return (
    <div className="rise space-y-12">
      <section className="space-y-4">
        <p className="text-[11px] font-semibold tracking-widest text-primary uppercase">
          Base de conhecimento comercial
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Tudo sobre <span className="text-gradient">como vendemos</span> na Microsistec
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Processos, produtos, precificação, ICP, diferenciais e objeções em um único lugar. Use a
          busca no topo (⌘K) para encontrar qualquer informação em segundos.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <div key={item.label} className="panel surface-hover p-5">
            <item.icon className="size-5 text-primary" />
            <p className="mt-4 text-2xl font-semibold tracking-tight">{item.value}</p>
            <p className="text-sm text-foreground/80">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.hint}</p>
          </div>
        ))}
      </section>

      {GROUPS.map((group) => (
        <section key={group} className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold tracking-tight">{group}</h2>
            <span className="text-xs text-muted-foreground">
              {SECTIONS.filter((s) => s.group === group).length} conteúdos
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SECTIONS.filter((s) => s.group === group).map((section) => (
              <Link
                key={section.slug}
                to="/central/$slug"
                params={{ slug: section.slug }}
                className="panel surface-hover group flex flex-col gap-3 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/12 text-primary">
                    <SectionIcon name={section.icon} className="size-4" />
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="font-medium tracking-tight">{section.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{section.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
