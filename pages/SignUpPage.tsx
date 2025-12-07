
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (signUpError) throw signUpError;
      
      // If sign up is successful, update the newly created profile with the full name and email
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ full_name: fullName, email: email })
          .eq('id', data.user.id);
        
        if (profileError) throw profileError;
      }

      setSuccess("Welcome to the team.");

      setTimeout(() => {
        navigate('/');
      }, 2000);

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
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">Join The Club</h2>
          <p className="mt-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
            Already a member?{' '}
            <NavLink to="/signin" className="text-white hover:text-gray-300 underline decoration-1 underline-offset-4 transition-colors">
              Sign in
            </NavLink>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="space-y-5">
            <div>
              <label htmlFor="full-name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Full Name
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm"
                placeholder="ENTER FULL NAME"
              />
            </div>
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
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm"
                placeholder="CREATE PASSWORD"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm"
                placeholder="CONFIRM PASSWORD"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500 text-center font-bold uppercase tracking-wide">{error}</p>}
          {success && <p className="text-sm text-green-500 text-center font-bold uppercase tracking-wide">{success}</p>}

          <div>
            <button
              type="submit"
              disabled={loading || !!success}
              className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-[0.2em] text-black bg-white hover:bg-gray-200 focus:outline-none transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : success ? 'Redirecting...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
