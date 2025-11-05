import React from 'react';

export default function HeroSection() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar - Fixed positioning */}
      <nav className="fixed top-[1.25rem] left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-[80rem] 2xl:max-w-[100rem] bg-[#F7FCFC] rounded-[1.5rem] shadow-[0_0.25rem_2.5rem_rgba(0,0,0,0.08)] px-[1.25rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] py-[1rem] sm:py-[1.25rem]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[0.5rem]">
            <img src="/logo.svg" alt="SmashChat" className="w-[1.75rem] h-[1.75rem] sm:w-[2rem] sm:h-[2rem]" />
            <span className="font-bold text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem]">SmashChat</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-[1.5rem] xl:gap-[2rem] 2xl:gap-[3rem] text-[0.875rem] xl:text-[1rem]">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-black hover:text-[#0096FF] transition-colors cursor-pointer">About Us</a>
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="text-black hover:text-[#0096FF] transition-colors cursor-pointer">Features</a>
            <a href="#how" onClick={(e) => handleNavClick(e, '#how')} className="text-black hover:text-[#0096FF] transition-colors cursor-pointer">How It Works</a>
            <a href="#vendor" onClick={(e) => handleNavClick(e, '#vendor')} className="text-black hover:text-[#0096FF] transition-colors cursor-pointer">Become A Vendor</a>
            <a href="#support" onClick={(e) => handleNavClick(e, '#support')} className="text-black hover:text-[#0096FF] transition-colors cursor-pointer">Support</a>
          </div>

          {/* CTA Button */}
          <button className="hidden sm:flex items-center gap-[0.5rem] bg-[#0096FF] text-white font-bold px-[1.25rem] md:px-[1.5rem] lg:px-[2rem] py-[0.625rem] md:py-[0.75rem] lg:py-[1rem] rounded-[1.25rem] hover:bg-[#0085e6] transition-colors text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] whitespace-nowrap">
            <img src="/get-app-icon.svg" alt="" className="w-[0.875rem] h-[0.875rem] lg:w-[1rem] lg:h-[1rem]" />
            Get The App Now
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-[0.5rem]">
            <div className="w-[1.5rem] h-[0.125rem] bg-black mb-[0.375rem]"></div>
            <div className="w-[1.5rem] h-[0.125rem] bg-black mb-[0.375rem]"></div>
            <div className="w-[1.5rem] h-[0.125rem] bg-black"></div>
          </button>
        </div>
      </nav>

    
    </div>
  );
}