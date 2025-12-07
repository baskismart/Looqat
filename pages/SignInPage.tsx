
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
      
      navigate('/'); // Redirect to home on successful login
    } catch (error: any) {
      setError(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-md w-full space-y-8 bg-[#050505] p-10 border border-gray-900 shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">Access Account</h2>
          <p className="mt-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
            Or{' '}
            <NavLink to="/signup" className="text-white hover:text-gray-300 underline decoration-1 underline-offset-4 transition-colors">
              start your journey
            </NavLink>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
          <div className="space-y-5">
            <div>
              <label htmlFor="email-address" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm"
                placeholder="ENTER EMAIL"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm"
                placeholder="ENTER PASSWORD"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-white focus:ring-white border-gray-700 rounded bg-[#111]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs font-bold text-gray-500 uppercase tracking-wider">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-bold text-gray-500 hover:text-white uppercase tracking-wider text-xs transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 text-center font-bold uppercase tracking-wide">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-[0.2em] text-black bg-white hover:bg-gray-200 focus:outline-none transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
