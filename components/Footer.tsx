import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => (
  <div className="text-2xl font-black tracking-tighter text-white uppercase transform skew-x-[-10deg]">
    LOOQAT
  </div>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Logo />
            <p className="text-sm text-gray-500 font-body leading-relaxed max-w-xs">
              Premium hydration gear designed for performance, gym, and life.
            </p>
            <div className="flex space-x-6">
               <SocialIcon href="https://instagram.com">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153 1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.62c-2.403 0-2.741.01-3.72.058-.975.045-1.504.207-1.957.383-.477.18-.862.417-1.254.81a3.27 3.27 0 00-.81 1.254c-.176.453-.338.982-.383 1.957-.049.98-.058 1.317-.058 3.72s.01 2.74.058 3.72c.045.975.207 1.504.383 1.957.18.477.417.862.81 1.254a3.27 3.27 0 001.254.81c.453.176.982.338 1.957.383.98.049 1.317.058 3.72.058s2.74-.01 3.72-.058c.975-.045 1.504-.207 1.957-.383.477-.18.862.417 1.254-.81a3.27 3.27 0 00.81-1.254c.176-.453.338.982.383-1.957.049-.98.058-1.317.058-3.72s-.01-2.74-.058-3.72c-.045-.975-.207-1.504-.383-1.957a3.27 3.27 0 00-.81-1.254 3.27 3.27 0 00-1.254-.81c-.453-.176-.982-.338-1.957-.383-.98-.049-1.317-.058-3.72-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.632a3.497 3.497 0 110-6.994 3.497 3.497 0 010 6.994zM16.949 6.865a1.232 1.232 0 100 2.464 1.232 1.232 0 000-2.464z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="https://amazon.in">
                     <span className="sr-only">Amazon</span>
                     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.64,15.35c-1.08,0.3-2.12,0.49-3.21,0.57c-2.47,0.19-4.99-0.93-6.22-3.11c-0.34-0.6-0.5-1.26-0.52-1.94 c-0.04-1.38,0.66-2.67,1.8-3.46c1.39-0.96,3.15-1.1,4.72-0.5c1.43,0.55,2.58,1.69,3.19,3.11c0.4,0.92,0.49,1.91,0.27,2.86 c-0.22,0.95-0.73,1.8-1.46,2.46C12.72,15.84,13.88,15.54,14.64,15.35z M23.95,13.13c-0.12-1-0.73-1.89-1.63-2.43 c-0.89-0.54-1.92-0.74-2.95-0.59c-0.08,0.01-0.16,0.03-0.24,0.04c-0.24-2.8-2.3-5.11-5.06-5.73C13.56,4.3,13.04,4.2,12.5,4.2 c-0.4,0-0.79,0.05-1.18,0.15c-2.42,0.6-4.26,2.69-4.72,5.16C4.16,10.23,1.84,11.59,0.79,13.87c-0.58,1.25-0.62,2.67-0.12,3.96 c0.5,1.29,1.52,2.3,2.83,2.77c2.34,0.84,4.92,0.02,6.54-1.7c0.27,1.13,0.98,2.1,2.06,2.69c1.07,0.58,2.3,0.78,3.5,0.5 c2.5-0.56,4.35-2.67,4.78-5.22c0.27-1.57-0.09-3.15-0.96-4.46L23.95,13.13z"/></svg>
                </SocialIcon>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Shop</h3>
            <ul className="space-y-4">
              <li><NavLink to="/product" className="text-sm text-gray-500 hover:text-white transition-colors">Stealth Series</NavLink></li>
              <li><a href="https://www.amazon.in/dp/B0CW2ZXDHZ" className="text-sm text-gray-500 hover:text-white transition-colors">Amazon Store</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Support</h3>
            <ul className="space-y-4">
              <li><NavLink to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact Us</NavLink></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
             <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Company</h3>
             <ul className="space-y-4">
               <li><NavLink to="/about" className="text-sm text-gray-500 hover:text-white transition-colors">Our Mission</NavLink></li>
               <li><NavLink to="/blog" className="text-sm text-gray-500 hover:text-white transition-colors">Journal</NavLink></li>
             </ul>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 uppercase tracking-wide">&copy; {new Date().getFullYear()} LOOQAT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-xs text-gray-600 hover:text-white uppercase tracking-wide">Privacy Policy</a>
             <a href="#" className="text-xs text-gray-600 hover:text-white uppercase tracking-wide">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;