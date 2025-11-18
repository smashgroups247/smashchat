import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links configuration
  const navLinks = [
    { to: "/about-us", label: "About Us" },
    { to: "/features", label: "Features" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/become-a-vendor", label: "Become A Vendor" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSupportClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Show and maximize Tawk widget when Support is clicked
    if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      window.Tawk_API.maximize();
    } else if (
      window.Tawk_API &&
      typeof window.Tawk_API.showWidget === "function"
    ) {
      window.Tawk_API.showWidget();
      // Try to open it after a brief delay to ensure it's ready
      setTimeout(() => {
        if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
          window.Tawk_API.maximize();
        }
      }, 300);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7FCFC] shadow-[0_0.25rem_2.5rem_rgba(0,0,0,0.08)] mx-0 lg:mx-16 xl:mx-20 2xl:mx-auto 2xl:max-w-[100rem] mt-0 lg:mt-[2.5rem] rounded-none lg:rounded-[1.5rem] px-4 md:px-6 lg:px-10 xl:px-[2.5rem] py-3 md:py-4 lg:py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo.svg"
            alt="SmashChat"
            className="w-7 h-7 md:w-8 md:h-8"
          />
          <span className="font-bold text-base md:text-lg">SmashChat</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 text-sm xl:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors relative pb-1 whitespace-nowrap ${
                isActive(link.to)
                  ? "text-[#0096FF] font-semibold"
                  : "text-black hover:text-[#0096FF]"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-0.5 bg-[#0096FF] rounded-full"></span>
              )}
            </Link>
          ))}

          {/* Support Button */}
          <button
            onClick={handleSupportClick}
            className="transition-colors relative pb-1 whitespace-nowrap text-black hover:text-[#0096FF]"
          >
            Support
          </button>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="hidden sm:flex items-center gap-2 bg-[#0096FF] text-white font-bold px-5 md:px-7 lg:px-8 py-2.5 md:py-3 lg:py-4 rounded-xl hover:bg-[#0085e6] transition-colors text-xs md:text-sm whitespace-nowrap shrink-0"
        >
          <img
            src="/get-app-icon.svg"
            alt=""
            className="w-3.5 h-3.5 md:w-4 md:h-4"
          />
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
            <Link
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className={`transition-colors text-sm py-2 ${
                isActive(link.to)
                  ? "text-[#0096FF] font-semibold"
                  : "text-black hover:text-[#0096FF]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Support Button - Mobile */}
          <button
            onClick={handleSupportClick}
            className="transition-colors text-sm py-2 text-black hover:text-[#0096FF] text-left"
          >
            Support
          </button>

          {/* CTA Button - Mobile */}
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
