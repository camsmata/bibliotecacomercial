import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  isDemoMode: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for when Supabase is not configured
const DEMO_USERS = [
  {
    email: "camila@microsistec.com.br",
    password: "Microsistec@2026",
    name: "Camila Massari",
    role: "Master",
  },
  {
    email: "comercial@microsistec.com.br",
    password: "Comercial@2026",
    name: "Equipe Comercial",
    role: "Comercial",
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(!isSupabaseConfigured);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      // Demo mode - check localStorage
      const stored = localStorage.getItem("microsistec_demo_session");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setUser(parsed);
        } catch {
          localStorage.removeItem("microsistec_demo_session");
        }
      }
      setLoading(false);
      return;
    }

    // Supabase mode
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured || !supabase) {
      // Demo mode authentication
      const demoUser = DEMO_USERS.find(
        (u) => u.email === email && u.password === password
      );
      if (!demoUser) {
        return { error: "Credenciais inválidas. Verifique seu e-mail e senha." };
      }
      const fakeUser = {
        id: demoUser.email,
        email: demoUser.email,
        user_metadata: { name: demoUser.name, role: demoUser.role },
        aud: "authenticated",
        role: demoUser.role,
        app_metadata: {},
        created_at: new Date().toISOString(),
      } as unknown as User;
      localStorage.setItem("microsistec_demo_session", JSON.stringify(fakeUser));
      setUser(fakeUser);
      return { error: null };
    }

    // Supabase authentication
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    if (!isSupabaseConfigured || !supabase) {
      localStorage.removeItem("microsistec_demo_session");
      setUser(null);
      return;
    }
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ session, user, loading, isDemoMode, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
