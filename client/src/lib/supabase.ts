import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://swjrujkmpddpyblayiiw.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_xVtfNKG1_Z5SAftl_0Zq2w_fOmI5WXu";


export const isSupabaseConfigured = supabaseUrl !== "" && supabaseAnonKey !== "";

// Only create the client if credentials are configured
// When not configured, we use demo mode (localStorage-based auth)
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;
