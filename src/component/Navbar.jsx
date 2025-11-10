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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7FCFC] shadow-[0_0.25rem_2.5rem_rgba(0,0,0,0.08)] px-[1.25rem] sm:px-[1.5rem] md:px-[2rem] lg:mx-[5rem] xl:mx-[6rem] 2xl:mx-[8rem] lg:px-[2.5rem] py-[1rem] sm:py-[1.25rem] rounded-none lg:mt-[2.5rem] lg:rounded-[1.5rem]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-[0.5rem]">
          <img src="/logo.svg" alt="SmashChat" className="w-[1.75rem] h-[1.75rem] sm:w-[2rem] sm:h-[2rem]" />
          <span className="font-bold text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem]">SmashChat</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-[0.5rem] xl:gap-[2rem] 2xl:gap-[3rem] text-[0.875rem] xl:text-[1rem]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive 
                    ? 'text-[#0096FF] font-semibold' 
                    : 'text-black hover:text-[#0096FF]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden sm:flex items-center gap-[0.5rem] bg-[#0096FF] text-white font-bold px-[1.25rem] md:px-[1.5rem] lg:px-[2rem] py-[0.625rem] md:py-[0.75rem] lg:py-[1rem] rounded-[1.25rem] hover:bg-[#0085e6] transition-colors text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] whitespace-nowrap"
        >
          <img src="/get-app-icon.svg" alt="" className="w-[0.875rem] h-[0.875rem] lg:w-[1rem] lg:h-[1rem]" />
          Get The App Now
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-[0.5rem]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-[1.5rem] h-[0.125rem] bg-black mb-[0.375rem]"></div>
          <div className="w-[1.5rem] h-[0.125rem] bg-black mb-[0.375rem]"></div>
          <div className="w-[1.5rem] h-[0.125rem] bg-black"></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-[1rem] pt-[1rem] border-t border-gray-200 flex flex-col gap-[1rem]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors text-[0.875rem] py-[0.5rem] ${
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
            className="sm:hidden flex items-center justify-center gap-[0.5rem] bg-[#0096FF] text-white font-bold px-[1.25rem] py-[0.75rem] rounded-[1.25rem] hover:bg-[#0085e6] transition-colors text-[0.875rem] mt-[0.5rem]"
          >
            <img src="/get-app-icon.svg" alt="" className="w-[0.875rem] h-[0.875rem]" />
            Get The App Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;