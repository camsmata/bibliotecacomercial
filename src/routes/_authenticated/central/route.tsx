import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart3,
  BookMarked,
  Boxes,
  CircleDollarSign,
  Command,
  Compass,
  Inbox,
  LayoutGrid,
  LogOut,
  MessageSquareQuote,
  Search,
  ShieldQuestion,
  Sparkles,
  Target,
  Trophy,
  Users,
  Workflow,
  X,
  Menu,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { GROUPS, SECTIONS, searchSections } from "@/content/library";
import { Button } from "@/components/ui/button";
import { ThemeToggle, ThemeToggleIcon } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/central")({
  component: CentralLayout,
});

const ICONS: Record<string, typeof Target> = {
  Target,
  Compass,
  Boxes,
  CircleDollarSign,
  Users,
  Sparkles,
  LayoutGrid,
  Workflow,
  Inbox,
  BarChart3,
  Trophy,
  ShieldQuestion,
  MessageSquareQuote,
  BookMarked,
};

export function SectionIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon className={className} />;
}

function CentralLayout() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? ""));
  }, []);

  useEffect(() => {
    setMobileNav(false);
    setOpen(false);
    setQuery("");
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hits = useMemo(() => searchSections(query), [query]);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-sidebar-border bg-sidebar transition-transform lg:translate-x-0",
          mobileNav ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Link to="/central" className="flex items-center gap-3">
            <span className="glow-teal grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
              <Command className="size-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight">Central Comercial</span>
              <span className="block text-[11px] tracking-wide text-muted-foreground uppercase">
                Microsistec
              </span>
            </span>
          </Link>
          <button
            className="text-muted-foreground lg:hidden"
            onClick={() => setMobileNav(false)}
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-6">
          {GROUPS.map((group) => (
            <div key={group}>
              <p className="px-3 pb-2 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                {group}
              </p>
              <ul className="space-y-1">
                {SECTIONS.filter((s) => s.group === group).map((section) => (
                  <li key={section.slug}>
                    <Link
                      to="/central/$slug"
                      params={{ slug: section.slug }}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[status=active]:bg-primary/12 data-[status=active]:font-medium data-[status=active]:text-primary"
                      activeProps={{ "data-status": "active" }}
                    >
                      <SectionIcon
                        name={section.icon}
                        className="size-4 shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
                      />
                      <span className="truncate">{section.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="space-y-3 border-t border-sidebar-border px-4 py-4">
          <ThemeToggle className="w-full" />
          <div>
            <p className="truncate text-xs text-muted-foreground">{email}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={signOut}
              className="mt-2 w-full justify-start gap-2 px-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <LogOut className="size-4" />
              Sair
            </Button>
          </div>
        </div>
      </aside>

      {mobileNav && (
        <div
          className="fixed inset-0 z-30 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileNav(false)}
        />
      )}

      {/* Conteúdo */}
      <div className="flex min-w-0 flex-1 flex-col lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-3.5">
            <button
              className="text-muted-foreground lg:hidden"
              onClick={() => setMobileNav(true)}
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </button>

            <div className="relative flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                placeholder="Buscar processo, produto, preço, objeção…"
                className="h-11 w-full rounded-xl border border-border bg-surface/70 pr-16 pl-10 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
              <kbd className="absolute top-1/2 right-3 hidden -translate-y-1/2 rounded-md border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:block">
                ⌘K
              </kbd>

              {open && query.trim().length >= 2 && (
                <div className="panel absolute top-13 right-0 left-0 z-30 max-h-[60vh] overflow-y-auto p-2">
                  {hits.length === 0 ? (
                    <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                      Nada encontrado para “{query}”.
                    </p>
                  ) : (
                    hits.map((hit) => (
                      <Link
                        key={hit.section.slug}
                        to="/central/$slug"
                        params={{ slug: hit.section.slug }}
                        className="flex gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-2"
                      >
                        <SectionIcon
                          name={hit.section.icon}
                          className="mt-0.5 size-4 shrink-0 text-primary"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-medium">{hit.section.title}</span>
                          <span className="line-clamp-2 block text-xs text-muted-foreground">
                            {hit.excerpt}
                          </span>
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            <ThemeToggleIcon className="relative lg:hidden" />
          </div>
        </header>

        <main
          className="mx-auto w-full max-w-5xl flex-1 px-5 py-10"
          onClick={() => setOpen(false)}
        >
          <Outlet />
        </main>

        <footer className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
          Documento interno Microsistec · uso restrito ao time comercial
        </footer>
      </div>
    </div>
  );
}
