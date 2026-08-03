import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { AppLayout } from "./components/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Differentials from "./pages/Differentials";
import Processes from "./pages/Processes";
import ICP from "./pages/ICP";
import Essence from "./pages/Essence";
import NotFound from "./pages/NotFound";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

function ProtectedApp() {
  const { user, loading } = useAuth();
  const [location, navigate] = useLocation();

  // Redirect root "/" to "/app" when authenticated
  useEffect(() => {
    if (!loading && user && location === "/") {
      navigate("/app");
    }
  }, [loading, user, location, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-[#5AA6A6]" />
          <p className="text-sm text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <AppLayout currentPath={location} onNavigate={navigate}>
      <Switch>
        <Route path="/app" component={Dashboard} />
        <Route path="/app/produtos" component={Products} />
        <Route path="/app/precificacao" component={Pricing} />
        <Route path="/app/diferenciais" component={Differentials} />
        <Route path="/app/processos" component={Processes} />
        <Route path="/app/icp" component={ICP} />
        <Route path="/app/essencia" component={Essence} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={ProtectedApp} />
      <Route path="/app" component={ProtectedApp} />
      <Route path="/app/:rest*" component={ProtectedApp} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
