import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

/**
 * Seletor de tema: dois estados com indicador deslizante.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Selecionar tema"
      className={cn(
        "relative inline-flex items-center gap-0.5 rounded-full border border-border bg-surface/70 p-1 backdrop-blur-sm",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-primary/15 ring-1 ring-primary/30 transition-transform duration-300 ease-out",
          theme === "dark" && "translate-x-full",
        )}
      />
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        title="Modo claro"
        className={cn(
          "relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
          theme === "light" ? "text-primary" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Sun className="size-3.5" />
        Claro
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        title="Modo escuro"
        className={cn(
          "relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
          theme === "dark" ? "text-primary" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Moon className="size-3.5" />
        Escuro
      </button>
    </div>
  );
}

/** Versão compacta, só ícone — para cabeçalhos e barras estreitas. */
export function ThemeToggleIcon({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      title={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-surface/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      <Sun className="size-4 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
