import { createClient, SupabaseClient } from '@supabase/supabase-js';

// IMPORTANT: Replace with your project's URL and anon key from your Supabase dashboard.
const supabaseUrl: string = 'https://iihfvrxmsmglzvhlherv.supabase.co';
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpaGZ2cnhtc21nbHp2aGxoZXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNzY2NTgsImV4cCI6MjA3Njk1MjY1OH0.JM6PnrP6CWUS3lckQGv61cyxna3660lfXR37LQEjFLE';

let client: SupabaseClient;

// Helper to create a dummy client that won't crash the app
const createDummyClient = () => {
  console.warn("Using dummy Supabase client due to initialization error or missing credentials.");
  return {
     auth: {
       getSession: async () => ({ data: { session: null }, error: null }),
       onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
       signInWithPassword: async () => ({ data: {}, error: { message: "Auth not configured" } }),
       signUp: async () => ({ data: {}, error: { message: "Auth not configured" } }),
       signOut: async () => ({ error: null }),
     },
     from: () => ({ 
       select: () => ({ 
         order: () => ({ data: [], error: null }),
         eq: () => ({ single: async () => ({ data: null, error: null }) }),
         insert: async () => ({ error: null }),
         update: () => ({ eq: async () => ({ error: null }) })
       }) 
     })
  } as unknown as SupabaseClient;
}

try {
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
    client = createDummyClient();
  } else {
    client = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (err) {
  console.error("Failed to initialize Supabase client:", err);
  client = createDummyClient();
}

export const supabase = client;