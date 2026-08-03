import { useState, useRef, useEffect } from "react";
import { Search, X, Command } from "lucide-react";
import { products, commercialProcesses, strategicPillars } from "@/lib/content";

interface SearchResult {
  type: "product" | "process" | "pillar" | "page";
  title: string;
  description: string;
  path: string;
}

const allSearchable: SearchResult[] = [
  ...products.map((p) => ({
    type: "product" as const,
    title: p.name,
    description: p.description,
    path: "/app/produtos",
  })),
  ...commercialProcesses.map((p) => ({
    type: "process" as const,
    title: p.name,
    description: p.objective,
    path: "/app/processos",
  })),
  ...strategicPillars.map((p) => ({
    type: "pillar" as const,
    title: p.title,
    description: p.description,
    path: "/app",
  })),
  { type: "page", title: "Precificação", description: "Tabela de preços e planos de todos os produtos", path: "/app/precificacao" },
  { type: "page", title: "Diferenciais Competitivos", description: "Principais diferenciais da Microsistec", path: "/app/diferenciais" },
  { type: "page", title: "Perfil Ideal de Cliente (ICP)", description: "Definição do cliente ideal e oportunidades de cross-sell", path: "/app/icp" },
  { type: "page", title: "Nossa Essência", description: "Promessa de valor e pilares da Microsistec", path: "/app/essencia" },
];

interface SearchBarProps {
  onNavigate: (path: string) => void;
}

export function SearchBar({ onNavigate }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Ctrl+K / Cmd+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
        inputRef.current?.blur();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = allSearchable.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setIsOpen(filtered.length > 0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (path: string) => {
    onNavigate(path);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder="Buscar produtos, processos, diferenciais..."
          className="w-full rounded-xl border border-[#5AA6A6]/15 bg-[#0A1A1A]/60 py-2.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[#5AA6A6]/30 focus:outline-none focus:ring-2 focus:ring-[#5AA6A6]/10"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {!query && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden items-center gap-0.5 sm:flex">
            <kbd className="flex h-5 items-center gap-0.5 rounded border border-[#5AA6A6]/15 bg-[#5AA6A6]/5 px-1.5 font-mono text-[9px] text-muted-foreground/50">
              ⌘K
            </kbd>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-[#5AA6A6]/15 bg-[#0D1F1E] shadow-2xl backdrop-blur-xl">
          <div className="max-h-80 overflow-y-auto p-2">
            {results.map((result, idx) => (
              <button
                key={idx}
                onClick={() => handleResultClick(result.path)}
                className="flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-[#5AA6A6]/8"
              >
                <div className="mt-0.5">
                  <span className="inline-block rounded-md bg-[#5AA6A6]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#7CC1C1]">
                    {result.type === "product" ? "Produto" : result.type === "process" ? "Processo" : result.type === "pillar" ? "Pilar" : "Página"}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{result.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{result.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
