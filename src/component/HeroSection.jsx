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

        </div>
      </nav>

    
    </div>
  );
}