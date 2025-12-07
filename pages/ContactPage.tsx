import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
        setError("Sorry, there was an error sending your message. Please try again.");
        console.error("Error submitting contact form:", error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-black py-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
      <div className="relative max-w-xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic sm:text-5xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-400 font-body">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
        <div className="bg-[#050505] p-8 sm:p-10 border border-gray-900 shadow-2xl">
          {submitted ? (
             <div className="text-center py-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-4">Message Received</h3>
                <p className="text-gray-400 mb-8 font-body">We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold uppercase tracking-widest text-white border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors pb-1"
                >
                  Send Another Message
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm"
                  placeholder="ENTER YOUR NAME"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm"
                  placeholder="ENTER YOUR EMAIL"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full bg-[#111] border border-gray-800 text-white py-3 px-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-600 sm:text-sm resize-none"
                  placeholder="HOW CAN WE HELP?"
                ></textarea>
              </div>

               {error && <p className="text-sm text-red-500 text-center font-bold">{error}</p>}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-[0.2em] text-black bg-white hover:bg-gray-200 focus:outline-none transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
            <p>Direct Support: <a href="mailto:support@looqat.com" className="text-white hover:underline font-bold">support@looqat.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;