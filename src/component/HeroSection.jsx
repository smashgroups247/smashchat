import React, { useState } from 'react';

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#features', label: 'Features' },
    { href: '#how', label: 'How It Works' },
    { href: '#vendor', label: 'Become A Vendor' },
    { href: '#support', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Fixed positioning with rounded corners on desktop */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7FCFC] shadow-[0_0.25rem_2.5rem_rgba(0,0,0,0.08)] px-[1.25rem] sm:px-[1.5rem] md:px-[2rem] lg:mx-[5rem] xl:mx-[6rem] 2xl:mx-[8rem] lg:px-[2.5rem] py-[1rem] sm:py-[1.25rem] rounded-none lg:mt-[2.5rem] lg:rounded-[1.5rem]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[0.5rem]">
            <img src="/logo.svg" alt="SmashChat" className="w-[1.75rem] h-[1.75rem] sm:w-[2rem] sm:h-[2rem]" />
            <span className="font-bold text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem]">SmashChat</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-[1.5rem] xl:gap-[2rem] 2xl:gap-[3rem] text-[0.875rem] xl:text-[1rem]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-black hover:text-[#0096FF] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
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
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-black hover:text-[#0096FF] transition-colors cursor-pointer text-[0.875rem] py-[0.5rem]"
              >
                {link.label}
              </a>
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

      {/* Hero Section */}
      <section className="relative pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem] lg:pt-[7rem] pb-0 overflow-hidden">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] 2xl:px-[8rem]">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1fr_1.1fr] 2xl:grid-cols-2 gap-[2rem] lg:gap-[2rem] xl:gap-[3rem] items-center">
            {/* Left Content */}
            <div className="relative z-10 space-y-[1.25rem] sm:space-y-[1.5rem] md:space-y-[2rem] lg:space-y-[2.5rem] pb-[4rem] sm:pb-[5rem] md:pb-[6rem] lg:pb-0 lg:pr-[2rem]">
              {/* Stars Decoration - Desktop (4 stars in rhombus) - positioned beside paragraph */}
              <div className="absolute top-[18rem] xl:top-[20rem] 2xl:top-[22rem] -left-[2rem] xl:-left-[6.5rem] w-[4rem] h-[4.5rem] xl:w-[5rem] xl:h-[5.5rem] hidden lg:block">
                {/* Top Star */}
                <img src="/star.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[1rem] h-[1rem] xl:w-[1.25rem] xl:h-[1.25rem]" />
                {/* Left Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 left-0 -translate-y-1/2 w-[1rem] h-[1rem] xl:w-[1.25rem] xl:h-[1.25rem]" />
                {/* Right Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 right-0 -translate-y-1/2 w-[1rem] h-[1rem] xl:w-[1.25rem] xl:h-[1.25rem]" />
                {/* Bottom Star */}
                <img src="/star.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1rem] h-[1rem] xl:w-[1.25rem] xl:h-[1.25rem]" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-[0.5rem] bg-[#0096FF] text-white px-[1rem] sm:px-[1.25rem] py-[0.625rem] sm:py-[0.75rem] rounded-full shadow-[0_0.25rem_0.5rem_rgba(20,27,52,0.04)] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]">
                Connect • Chat • Shop
              </div>

              {/* Main Heading - Breaking after & */}
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4.5rem] font-bold leading-tight sm:leading-[1.2] lg:leading-[3.75rem] xl:leading-[4.25rem] 2xl:leading-[5.5rem]">
                Africa's <span className="text-[#0096FF]">Own Chat &</span>
                <br />
                Marketplace App.
              </h1>

              {/* Africa Map Background - improved opacity */}
              <div className="absolute left-[10rem] sm:left-[12rem] md:left-[14rem] lg:left-[6rem] xl:left-[10rem] 2xl:left-[16rem] top-[12rem] sm:top-[13rem] md:top-[14rem] lg:top-[13rem] xl:top-[15rem] 2xl:top-[18rem] w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[18rem] xl:w-[24rem] 2xl:w-[35rem] h-[12rem] sm:h-[13.5rem] md:h-[15.3rem] lg:h-[15.3rem] xl:h-[20.4rem] 2xl:h-[30rem] opacity-30 pointer-events-none z-0">
                <img src="/africa-map.png" alt="" className="w-full h-full object-contain" />
              </div>

              {/* Subtitle */}
              <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[2rem] leading-relaxed lg:leading-[2rem] xl:leading-[2.25rem] 2xl:leading-[3rem] text-[#00212A] max-w-[35rem] lg:max-w-[30rem] xl:max-w-[35rem] 2xl:max-w-[50rem] relative z-10">
                Connect, chat, and shop with your contacts, all in one place. Launching across Africa. Be first in line.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-[0.75rem] sm:gap-[1rem] relative z-10">
                <a href="#" className="block">
                  <img src="/app-store-button.png" alt="Download on App Store" className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[8rem] xl:w-[9rem] 2xl:w-[12rem] h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] lg:h-[3rem] xl:h-[3.5rem] 2xl:h-[4rem] cursor-pointer hover:opacity-90 transition-opacity" />
                </a>
                <a href="#" className="block">
                  <img src="/google-play-button.png" alt="Get it on Google Play" className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[8rem] xl:w-[9rem] 2xl:w-[12rem] h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] lg:h-[3rem] xl:h-[3.5rem] 2xl:h-[4rem] cursor-pointer hover:opacity-90 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Right Side - Image Area */}
            <div className="relative w-full h-[35rem] sm:h-[45rem] md:h-[50rem] lg:h-[50rem] xl:h-[55rem] 2xl:h-[60rem]">
              {/* Stars Decoration - Mobile & Tablet - positioned beside paragraph */}
              <div className="absolute -left-[0.5rem] bottom-[12rem] sm:bottom-[14rem] md:bottom-[16rem] w-[3rem] h-[3.5rem] lg:hidden z-30">
                {/* Top Star */}
                <img src="/star.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.75rem] h-[0.75rem] sm:w-[0.875rem] sm:h-[0.875rem]" />
                {/* Left Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 left-0 -translate-y-1/2 w-[0.75rem] h-[0.75rem] sm:w-[0.875rem] sm:h-[0.875rem]" />
                {/* Right Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 right-0 -translate-y-1/2 w-[0.75rem] h-[0.75rem] sm:w-[0.875rem] sm:h-[0.875rem]" />
                {/* Bottom Star */}
                <img src="/star.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[0.75rem] h-[0.75rem] sm:w-[0.875rem] sm:h-[0.875rem]" />
              </div>

              {/* Background Shape - extends to fill on mobile, fully accommodates image on desktop */}
             <div className="absolute -top-[12rem] sm:-top-[14rem] md:-top-[16rem] lg:-top-[10rem] xl:-top-[12rem] 2xl:-top-[14rem] -right-[1rem] sm:-right-[1.5rem] md:-right-[3.1875rem] lg:-right-[5rem] lg:-left-[3rem] xl:-right-[6rem] xl:-left-[3rem] 2xl:-right-[8rem] 2xl:-left-[2rem] w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)] md:w-full lg:w-[calc(100%+8rem)] xl:w-[calc(100%+9rem)] 2xl:w-[calc(100%+10rem)] h-[calc(100%+18rem)] sm:h-[calc(100%+20rem)] md:h-[calc(100%+22rem)] lg:h-[calc(100%+17rem)] xl:h-[calc(100%+19rem)] 2xl:h-[calc(100%+21rem)] bg-[#E7F4F6] rounded-bl-[4rem] sm:rounded-bl-[5rem] md:rounded-bl-[6rem] lg:rounded-bl-[7.4375rem]"></div>

              {/* People Image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[22rem] sm:w-[30rem] md:w-[35rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[48rem] h-[28rem] sm:h-[36rem] md:h-[42rem] lg:h-[42rem] xl:h-[48rem] 2xl:h-[60rem]">
                <img src="/hero-people.png" alt="People using SmashChat" className="w-full h-full object-cover object-top" />
              </div>

              {/* Shop with friends card */}
              <div className="absolute bottom-[4rem] sm:bottom-[5rem] md:bottom-[6rem] lg:bottom-[6rem] xl:bottom-[8rem] 2xl:bottom-[12rem] left-[-0.6rem] sm:left-[2rem] md:left-[-2rem] lg:left-[-6rem] xl:left-[-8rem] 2xl:-left-[6rem] bg-white rounded-full shadow-[0.25rem_0.25rem_3.625rem_rgba(0,0,0,0.12)] px-[1.25rem] sm:px-[1.5rem] md:px-[1.6875rem] py-[1rem] sm:py-[1.25rem] md:py-[1.5rem] flex items-center gap-[0.625rem] sm:gap-[0.75rem] md:gap-[1rem] z-20">
                <img src="/shop-icon.svg" alt="" className="w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem] md:w-[1.75rem] md:h-[1.75rem]" />
                <span className="text-[#00212A] text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] font-medium whitespace-nowrap">Shop with friends</span>
              </div>

              {/* Chat with friends card */}
              <div className="absolute top-[2rem] sm:top-[3rem] md:top-[4rem] lg:top-[6rem] xl:top-[6rem] 2xl:top-[4rem] right-[1rem] sm:right-[1.5rem] md:right-[2rem] lg:right-[1rem] xl:right-[2rem] 2xl:right-[0rem] bg-white rounded-full shadow-[0.25rem_0.25rem_3.625rem_rgba(0,0,0,0.12)] px-[1.25rem] sm:px-[1.5rem] md:px-[1.6875rem] py-[1rem] sm:py-[1.25rem] md:py-[1.5rem] flex items-center gap-[0.625rem] sm:gap-[0.75rem] md:gap-[1rem] z-20">
                <img src="/chat-icon.svg" alt="" className="w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem] md:w-[1.75rem] md:h-[1.75rem]" />
                <span className="text-[#00212A] text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] font-medium whitespace-nowrap">Chat with friends</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}