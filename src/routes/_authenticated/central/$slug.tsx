import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SECTIONS, type Block } from "@/content/library";
import { SectionIcon } from "./route";

export const Route = createFileRoute("/_authenticated/central/$slug")({
  head: ({ params }) => {
    const section = SECTIONS.find((s) => s.slug === params.slug);
    const title = section
      ? `${section.title} | Central Comercial Microsistec`
      : "Conteúdo | Central Comercial Microsistec";
    const description =
      section?.summary ?? "Conteúdo da Central de Inteligência Comercial da Microsistec.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "noindex, nofollow" },
      ],
    };
  },
  loader: ({ params }) => {
    const section = SECTIONS.find((s) => s.slug === params.slug);
    if (!section) throw notFound();
    return { slug: section.slug };
  },
  errorComponent: () => (
    <p className="text-sm text-muted-foreground">Não foi possível carregar este conteúdo.</p>
  ),
  notFoundComponent: () => (
    <p className="text-sm text-muted-foreground">Conteúdo não encontrado.</p>
  ),
  component: SectionPage,
});

function SectionPage() {
  const { slug } = Route.useLoaderData();
  const index = SECTIONS.findIndex((s) => s.slug === slug);
  const section = SECTIONS[index]!;
  const prev = SECTIONS[index - 1];
  const next = SECTIONS[index + 1];

  return (
    <article className="rise space-y-10">
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-xs tracking-widest text-primary uppercase">
          <SectionIcon name={section.icon} className="size-3.5" />
          {section.group}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">{section.title}</h1>
        <p className="max-w-2xl text-muted-foreground">{section.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {section.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-8">
        {section.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </div>

      <nav className="grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            to="/central/$slug"
            params={{ slug: prev.slug }}
            className="panel surface-hover flex items-center gap-3 p-4 text-sm"
          >
            <ChevronLeft className="size-4 text-primary" />
            <span>
              <span className="block text-xs text-muted-foreground">Anterior</span>
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to="/central/$slug"
            params={{ slug: next.slug }}
            className="panel surface-hover flex items-center justify-end gap-3 p-4 text-right text-sm"
          >
            <span>
              <span className="block text-xs text-muted-foreground">Próximo</span>
              {next.title}
            </span>
            <ChevronRight className="size-4 text-primary" />
          </Link>
        )}
      </nav>
    </article>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return <p className="leading-relaxed text-foreground/85">{block.value}</p>;

    case "callout":
      return (
        <div className="panel relative overflow-hidden p-5 pl-6">
          <span className="absolute inset-y-0 left-0 w-1 bg-primary" />
          <p className="text-sm font-semibold tracking-tight text-primary">{block.title}</p>
          <p className="mt-2 leading-relaxed text-foreground/85">{block.value}</p>
        </div>
      );

    case "list":
      return (
        <section className="space-y-3">
          {block.title && (
            <h2 className="text-lg font-semibold tracking-tight">{block.title}</h2>
          )}
          <ul className="space-y-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-foreground/85">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section className="space-y-3">
          {block.title && (
            <h2 className="text-lg font-semibold tracking-tight">{block.title}</h2>
          )}
          <ol className="space-y-3">
            {block.items.map((item, i) => (
              <li key={item.label} className="panel surface-hover flex gap-4 p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary/12 font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-medium">{item.label}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      );

    case "table":
      return (
        <section className="space-y-3">
          {block.title && (
            <h2 className="text-lg font-semibold tracking-tight">{block.title}</h2>
          )}
          <div className="panel overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  {block.headers.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/60 transition-colors last:border-0 hover:bg-surface-2/60"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={
                          j === 0
                            ? "px-4 py-3 font-medium text-foreground"
                            : "px-4 py-3 text-foreground/80"
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );

    case "kpis":
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {block.items.map((item) => (
            <div key={item.label} className="panel surface-hover p-4">
              <p className="text-2xl font-semibold tracking-tight text-primary">{item.value}</p>
              <p className="mt-1 text-sm">{item.label}</p>
              {item.hint && <p className="text-xs text-muted-foreground">{item.hint}</p>}
            </div>
          ))}
        </div>
      );
  }
}
