import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Logo: React.FC = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" fontFamily="Poppins, sans-serif" fontSize="30" fontWeight="bold" className="fill-current text-[#F5F5F5]">
      LOOQ
      <tspan fill="#ffbb98">A</tspan>
      T
    </text>
  </svg>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile } = useAuth();

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-[#ffbb98]' : 'text-[#F5F5F5] hover:bg-[#1a1a1a]'
    }`;
    
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive ? 'bg-[#0B0B0B] text-[#ffbb98]' : 'text-[#F5F5F5] hover:bg-[#1a1a1a]'
    }`;

  return (
    <nav className="bg-[#0B0B0B]/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/">
                <Logo />
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/product" className={navLinkClasses}>Product</NavLink>
              <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <div className="ml-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-white max-w-xs truncate" title={profile?.full_name || ''}>{profile?.full_name}</span>
                    <a
                      href="https://www.amazon.in/dp/B0CW2ZXDHZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#0B0B0B] bg-[#ffbb98] hover:bg-[#f8a87e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0B0B] focus:ring-[#ffbb98] transition-transform duration-300 hover:scale-105"
                    >
                      Shop Now
                    </a>
                  </div>
                ) : (
                  <>
                    <NavLink to="/signin" className="text-[#F5F5F5] hover:bg-[#1a1a1a] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                      Sign In
                    </NavLink>
                    <NavLink to="/signup" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#0B0B0B] bg-[#ffbb98] hover:bg-[#f8a87e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0B0B] focus:ring-[#ffbb98] transition-transform duration-300 hover:scale-105">
                      Sign Up
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#1a1a1a] inline-flex items-center justify-center p-2 rounded-md text-[#a0a0a0] hover:text-white hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0B0B] focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/product" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Product</NavLink>
            <NavLink to="/blog" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <div className="border-t border-[#333333] my-2"></div>
            {user ? (
               <>
                <div className="px-3 py-2">
                    <p className="text-base font-medium text-white truncate" title={profile?.full_name || ''}>{profile?.full_name}</p>
                </div>
                <a
                  href="https://www.amazon.in/dp/B0CW2ZXDHZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#0B0B0B] bg-[#ffbb98] hover:bg-[#f8a87e]"
                >
                  Shop Now
                </a>
               </>
            ) : (
               <>
                 <NavLink to="/signin" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Sign In</NavLink>
                 <NavLink 
                   to="/signup" 
                   onClick={() => setIsOpen(false)}
                   className="mt-2 block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#0B0B0B] bg-[#ffbb98] hover:bg-[#f8a87e]"
                 >
                   Sign Up
                 </NavLink>
               </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;