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
    <div className="bg-[#0B0B0B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-[#a0a0a0]">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12">
          {submitted ? (
             <div className="text-center p-8 bg-[#1a1a1a] rounded-lg">
                <h3 className="text-2xl font-bold text-[#ffbb98]">Thank You!</h3>
                <p className="mt-2 text-[#F5F5F5]">Your message has been sent. We'll get back to you shortly.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-[#a0a0a0] text-[#F5F5F5] bg-[#1a1a1a] border-[#333333] rounded-md focus:ring-[#ffbb98] focus:border-[#ffbb98]"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-[#a0a0a0] text-[#F5F5F5] bg-[#1a1a1a] border-[#333333] rounded-md focus:ring-[#ffbb98] focus:border-[#ffbb98]"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-[#a0a0a0] text-[#F5F5F5] bg-[#1a1a1a] border-[#333333] rounded-md focus:ring-[#ffbb98] focus:border-[#ffbb98]"
                  placeholder="Message"
                ></textarea>
              </div>

               {error && <p className="text-sm text-red-500 text-center">{error}</p>}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-[#0B0B0B] bg-[#ffbb98] hover:bg-[#f8a07e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0B0B] focus:ring-[#ffbb98] disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="mt-10 text-center text-[#a0a0a0]">
            <p>You can also reach us at: <a href="mailto:support@looqat.com" className="font-medium text-[#ffbb98] hover:text-[#f8a87e]">support@looqat.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;