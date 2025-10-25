import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace with your project's URL and anon key from your Supabase dashboard.
// FIX: Add explicit string type to prevent TypeScript from inferring a literal type,
// which causes an error when comparing to the placeholder string below.
const supabaseUrl: string = 'https://iihfvrxmsmglzvhlherv.supabase.co';
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpaGZ2cnhtc21nbHp2aGxoZXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNzY2NTgsImV4cCI6MjA3Njk1MjY1OH0.JM6PnrP6CWUS3lckQGv61cyxna3660lfXR37LQEjFLE';

if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
  const errorMessage = "Supabase credentials are not configured. Please open `supabaseClient.tsx` and replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_ANON_KEY' with your actual Supabase project URL and anon key.";
  
  // Display a more user-friendly error on the page itself
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 4rem 2rem; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; background-color: #0B0B0B; color: #F5F5F5;">
        <h1 style="color: #ffbb98; font-size: 2rem; margin-bottom: 1rem;">Configuration Required</h1>
        <p style="font-size: 1.1rem; max-width: 600px;">${errorMessage}</p>
        <p style="margin-top: 1.5rem; color: #a0a0a0;">You can find these values in your project's API settings on the Supabase website.</p>
      </div>
    `;
  }
  
  // Note: We don't throw an error here to prevent the app from crashing.
  // The UI message is sufficient to guide the user.
}


export const supabase = createClient(supabaseUrl, supabaseAnonKey);