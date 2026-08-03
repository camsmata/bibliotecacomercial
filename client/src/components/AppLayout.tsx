import { useState } from "react";
import { Sidebar, navItems } from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";
import { Menu, Activity } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface AppLayoutProps {
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function AppLayout({ children, currentPath, onNavigate }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  const sidebarWidth = collapsed ? 68 : 256;
  const userName = user?.user_metadata?.name || user?.email || "Usuário";
  const userInitial = userName.charAt(0).toUpperCase();
  const currentNav = navItems.find((n) => n.path === currentPath);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        currentPath={currentPath}
        onNavigate={(path) => {
          onNavigate(path);
          setMobileOpen(false);
        }}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className="transition-all duration-300 ease-out"
        style={{ marginLeft: `${sidebarWidth}px` }}
      >
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-[#5AA6A6]/10 bg-[#0A1A1A]/85 px-4 backdrop-blur-xl lg:px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#5AA6A6]/10 hover:text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <SearchBar onNavigate={onNavigate} />

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-lg border border-[#5AA6A6]/10 bg-[#5AA6A6]/5 px-3 py-1.5 sm:flex">
              <Activity className="h-3 w-3 text-[#5AA6A6]" />
              <span className="font-mono text-[10px] text-[#7CC1C1]">Online</span>
              <div className="h-1.5 w-1.5 rounded-full bg-[#5AA6A6] animate-pulse" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#5AA6A6]/30 to-[#2B5250]/30 ring-1 ring-[#5AA6A6]/20 text-sm font-bold text-[#7CC1C1]">
              {userInitial}
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="px-4 py-6 lg:px-8 lg:py-8">
          {/* Breadcrumb */}
          {currentNav && currentPath !== "/app" && (
            <div className="mb-5 flex items-center gap-2">
              <button
                onClick={() => onNavigate("/app")}
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 transition-colors hover:text-[#5AA6A6]"
              >
                Central
              </button>
              <span className="font-mono text-[10px] text-muted-foreground/20">/</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5AA6A6]/60">
                {currentNav.label}
              </span>
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
