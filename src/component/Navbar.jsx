import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/about-us');

  // Navigation links configuration
  const navLinks = [
    { to: '/about-us', label: 'About Us' },
    { to: '/features', label: 'Features' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/become-a-vendor', label: 'Become A Vendor' },
    { to: '/support', label: 'Support' }
  ];

  const handleLinkClick = (to) => {
    setActiveLink(to);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7FCFC] shadow-[0_0.25rem_2.5rem_rgba(0,0,0,0.08)] mx-0 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-auto 2xl:max-w-[90rem] mt-0 lg:mt-[2.5rem] rounded-none lg:rounded-[1.5rem] px-4 md:px-6 lg:px-10 xl:px-[2.5rem] py-3 md:py-4 lg:py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 shrink-0" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
        >
          <img src="/logo.svg" alt="SmashChat" className="w-7 h-7 md:w-8 md:h-8" />
          <span className="font-bold text-base md:text-lg">SmashChat</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 text-sm xl:text-base">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href="#"
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.to); }}
              className={`transition-colors relative pb-1 whitespace-nowrap ${
                activeLink === link.to
                  ? 'text-[#0096FF] font-semibold' 
                  : 'text-black hover:text-[#0096FF]'
              }`}
            >
              {link.label}
              {activeLink === link.to && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-0.5 bg-[#0096FF] rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="hidden sm:flex items-center gap-2 bg-[#0096FF] text-white font-bold px-5 md:px-7 lg:px-8 py-2.5 md:py-3 lg:py-4 rounded-xl hover:bg-[#0085e6] transition-colors text-xs md:text-sm whitespace-nowrap shrink-0"
        >
          <img src="/get-app-icon.svg" alt="" className="w-3.5 h-3.5 md:w-4 md:h-4" />
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
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href="#"
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.to); }}
              className={`transition-colors text-sm py-2 ${
                activeLink === link.to
                  ? 'text-[#0096FF] font-semibold' 
                  : 'text-black hover:text-[#0096FF]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="sm:hidden flex items-center justify-center gap-2 bg-[#0096FF] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#0085e6] transition-colors text-sm mt-2"
          >
            <img src="/get-app-icon.svg" alt="" className="w-3.5 h-3.5" />
            Get The App Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;