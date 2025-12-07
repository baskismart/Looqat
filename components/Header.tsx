import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Logo: React.FC = () => (
  <div className="text-2xl font-black tracking-tighter text-white uppercase transform skew-x-[-10deg]">
    LOOQAT
  </div>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, profile } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
      isActive ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
    }`;
    
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 text-lg font-bold uppercase tracking-wide transition-colors duration-300 ${
      isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`;

  const navClasses = `sticky top-0 z-50 transition-all duration-300 ${
    (!isHomePage || isScrolled || isOpen) 
      ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' 
      : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/">
                <Logo />
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/product" className={navLinkClasses}>Shop</NavLink>
              <NavLink to="/about" className={navLinkClasses}>Mission</NavLink>
              <NavLink to="/blog" className={navLinkClasses}>Journal</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <div className="ml-4">
                {user ? (
                  <div className="flex items-center space-x-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 max-w-xs truncate" title={profile?.full_name || ''}>{profile?.full_name}</span>
                    <a
                      href="https://www.amazon.in/dp/B0CW2ZXDHZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 text-sm font-bold uppercase tracking-widest text-black bg-white hover:bg-gray-200 transition-colors duration-300"
                    >
                      Shop Now
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <NavLink to="/signin" className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                      Log In
                    </NavLink>
                    <a
                      href="https://www.amazon.in/dp/B0CW2ZXDHZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 border border-white text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Get Yours
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
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
        <div className="md:hidden bg-black border-b border-gray-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/product" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Shop</NavLink>
            <NavLink to="/about" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Mission</NavLink>
            <NavLink to="/blog" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Journal</NavLink>
            <div className="border-t border-gray-800 my-4 pt-4"></div>
            {user ? (
               <>
                <div className="px-3 py-2">
                    <p className="text-base font-bold text-white truncate" title={profile?.full_name || ''}>{profile?.full_name}</p>
                </div>
                <a
                  href="https://www.amazon.in/dp/B0CW2ZXDHZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block w-full text-center px-4 py-3 text-base font-bold uppercase tracking-widest text-black bg-white hover:bg-gray-200"
                >
                  Shop Now
                </a>
               </>
            ) : (
               <div className="space-y-3 px-2">
                 <NavLink to="/signin" className="block text-base font-bold text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Log In</NavLink>
                 <a 
                   href="https://www.amazon.in/dp/B0CW2ZXDHZ" 
                   target="_blank"
                   rel="noopener noreferrer"
                   onClick={() => setIsOpen(false)}
                   className="block w-full text-center px-4 py-3 border border-white text-base font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black"
                 >
                   Get Yours
                 </a>
               </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;