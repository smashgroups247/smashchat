import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links configuration
  const navLinks = [
    { to: '/about-us', label: 'About Us' },
    { to: '/features', label: 'Features' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/become-a-vendor', label: 'Become A Vendor' },
    { to: '/support', label: 'Support' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7FCFC] shadow-[0_0.25rem_2.5rem_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 lg:mt-10 lg:rounded-3xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.svg" alt="SmashChat" className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="font-bold text-base sm:text-lg">SmashChat</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors relative pb-1 whitespace-nowrap ${
                    isActive 
                      ? 'text-[#0096FF] font-semibold' 
                      : 'text-black hover:text-[#0096FF]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-0.5 bg-[#0096FF] rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 bg-[#0096FF] text-white font-bold px-5 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 rounded-xl hover:bg-[#0085e6] transition-colors text-xs md:text-sm lg:text-base whitespace-nowrap shrink-0"
          >
            <img src="/get-app-icon.svg" alt="" className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            Get The App Now
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `transition-colors text-sm py-2 ${
                    isActive 
                      ? 'text-[#0096FF] font-semibold' 
                      : 'text-black hover:text-[#0096FF]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="#"
              className="sm:hidden flex items-center justify-center gap-2 bg-[#0096FF] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#0085e6] transition-colors text-sm mt-2"
            >
              <img src="/get-app-icon.svg" alt="" className="w-3.5 h-3.5" />
              Get The App Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;