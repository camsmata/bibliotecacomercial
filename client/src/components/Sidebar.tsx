import { MicrosistecLogo } from "@/components/MicrosistecLogo";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  Package,
  DollarSign,
  Award,
  GitBranch,
  Target,
  Lightbulb,
  LogOut,
  ChevronLeft,
  Activity,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  badge?: string;
}

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Visão Geral", icon: LayoutDashboard, path: "/app" },
  { id: "produtos", label: "Cardápio de Produtos", icon: Package, path: "/app/produtos", badge: "5" },
  { id: "precificacao", label: "Precificação", icon: DollarSign, path: "/app/precificacao" },
  { id: "diferenciais", label: "Diferenciais", icon: Award, path: "/app/diferenciais" },
  { id: "processos", label: "Processos Comerciais", icon: GitBranch, path: "/app/processos" },
  { id: "icp", label: "Perfil Ideal de Cliente", icon: Target, path: "/app/icp" },
  { id: "essencia", label: "Nossa Essência", icon: Lightbulb, path: "/app/essencia" },
];

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({
  currentPath,
  onNavigate,
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const { user, signOut } = useAuth();
  const userName = user?.user_metadata?.name || user?.email || "Usuário";
  const userRole = user?.user_metadata?.role || user?.role || "Colaborador";
  const userInitial = userName.charAt(0).toUpperCase();

  // Determine role label
  const roleLabel = user?.email?.includes("camila") ? "Master" : "Comercial";

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-[#5AA6A6]/10 bg-[#0D1F1E]
          transition-all duration-300 ease-out
          ${collapsed ? "w-[68px]" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo header */}
        <div className="relative flex h-16 items-center justify-between border-b border-[#5AA6A6]/10 px-4">
          <div className={`${collapsed ? "hidden" : "block"}`}>
            <MicrosistecLogo showText={false} className="scale-90" />
          </div>
          <div className={`${collapsed ? "flex w-full justify-center" : "hidden"}`}>
            <MicrosistecLogo showText={false} className="scale-75" />
          </div>
          <button
            onClick={onToggleCollapse}
            className={`hidden rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-[#5AA6A6]/10 hover:text-[#5AA6A6] lg:block ${collapsed ? "absolute right-1 top-1/2 -translate-y-1/2" : ""}`}
          >
            <ChevronLeft
              className={`h-4 w-4 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* System status indicator */}
        {!collapsed && (
          <div className="mx-3 mt-3 flex items-center gap-2 rounded-lg border border-[#5AA6A6]/10 bg-[#5AA6A6]/5 px-3 py-2">
            <Activity className="h-3 w-3 text-[#5AA6A6]" />
            <span className="font-mono text-[10px] text-[#7CC1C1]">Sistema Online</span>
            <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#5AA6A6] animate-pulse" />
          </div>
        )}

        {/* Navigation label */}
        {!collapsed && (
          <div className="px-5 pb-1 pt-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40">
              Navegação
            </span>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 py-2">
          <div className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.path)}
                  title={collapsed ? item.label : undefined}
                  className={`
                    group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
                    transition-all duration-200
                    ${isActive
                      ? "bg-[#5AA6A6]/10 text-[#5AA6A6]"
                      : "text-muted-foreground hover:bg-[#5AA6A6]/5 hover:text-foreground"
                    }
                    ${collapsed ? "justify-center" : ""}
                  `}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r-full bg-[#5AA6A6]" style={{ boxShadow: "0 0 8px rgba(90,166,166,0.5)" }} />
                  )}
                  <Icon className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-[#5AA6A6]" : "group-hover:text-foreground"}`} />
                  {!collapsed && (
                    <>
                      <span className="truncate">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto rounded-md border border-[#5AA6A6]/15 bg-[#5AA6A6]/8 px-1.5 py-0.5 font-mono text-[9px] text-[#7CC1C1]">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* User info and logout */}
        <div className="border-t border-[#5AA6A6]/10 p-3">
          {!collapsed && (
            <div className="mb-2">
              <div className="flex items-center gap-3 rounded-lg border border-[#5AA6A6]/8 bg-[#0A1A1A]/60 px-3 py-2.5">
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5AA6A6]/30 to-[#2B5250]/30 ring-1 ring-[#5AA6A6]/20 text-sm font-bold text-[#7CC1C1]">
                  {userInitial}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-foreground">{userName}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#5AA6A6]/60">{roleLabel}</p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={signOut}
            title={collapsed ? "Sair" : undefined}
            className={`
              flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
              text-muted-foreground/60 transition-all hover:bg-red-500/8 hover:text-red-400
              ${collapsed ? "justify-center" : ""}
            `}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Sair</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
