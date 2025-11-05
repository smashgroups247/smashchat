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
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="relative pt-[7rem] sm:pt-[8rem] md:pt-[9rem] lg:pt-[10rem] pb-0">
        <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] 2xl:px-[8rem]">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] items-center">
            {/* Left Content */}
            <div className="relative z-10 space-y-[1.25rem] sm:space-y-[1.5rem] md:space-y-[2rem] lg:space-y-[2.5rem] pb-[3rem] sm:pb-[4rem] lg:pb-0">
              {/* Stars Decoration - Desktop (4 stars in rhombus) */}
              <div className="absolute top-[20rem] xl:top-[23rem] -left-[4rem] xl:-left-[6rem] w-[5rem] h-[5.5rem] xl:w-[6.088rem] xl:h-[6.801rem] hidden lg:block">
                {/* Top Star */}
                <img src="/star.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.25rem] h-[1.25rem]" />
                {/* Left Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 left-0 -translate-y-1/2 w-[1.25rem] h-[1.25rem]" />
                {/* Right Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 right-0 -translate-y-1/2 w-[1.25rem] h-[1.25rem]" />
                {/* Bottom Star */}
                <img src="/star.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1.25rem] h-[1.25rem]" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-[0.5rem] bg-[#0096FF] text-white px-[1rem] sm:px-[1.25rem] py-[0.625rem] sm:py-[0.75rem] rounded-full shadow-[0_0.25rem_0.5rem_rgba(20,27,52,0.04)] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem]">
                Connect • Chat • Shop
              </div>

              {/* Main Heading */}
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] font-bold leading-tight sm:leading-[1.2] lg:leading-[4.75rem] 2xl:leading-[5.5rem]">
                Africa's <span className="text-[#0096FF]">Own Chat &<br /></span>
                Marketplace App.
              </h1>

              {/* Africa Map Background */}
              <div className="absolute hidden lg:block left-[6rem] xl:left-[12rem] 2xl:left-[12rem] top-[14rem] xl:top-[16rem] 2xl:top-[18rem] w-[20rem] xl:w-[29rem] 2xl:w-[35rem] h-[17rem] xl:h-[24.75rem] 2xl:h-[30rem] opacity-20 pointer-events-none z-0">
                <img src="/africa-map.png" alt="" className="w-full h-full object-contain" />
              </div>

              {/* Subtitle */}
              <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] leading-relaxed lg:leading-[2.625rem] 2xl:leading-[3rem] text-[#00212A] max-w-[35rem] xl:max-w-[40rem] 2xl:max-w-[50rem] relative z-10">
                Connect, chat, and shop with your contacts, all in one place. Launching across Africa. Be first in line.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-[0.75rem] sm:gap-[1rem] relative z-10">
                <img src="/app-store-button.png" alt="Download on App Store" className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem] 2xl:w-[12rem] h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] 2xl:h-[4rem] cursor-pointer hover:opacity-90 transition-opacity" />
                <img src="/google-play-button.png" alt="Get it on Google Play" className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem] 2xl:w-[12rem] h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] 2xl:h-[4rem] cursor-pointer hover:opacity-90 transition-opacity" />
              </div>
            </div>

            {/* Right Side - Image Area */}
            <div className="relative w-full h-[35rem] sm:h-[45rem] md:h-[50rem] lg:absolute lg:right-0 lg:top-0 lg:w-[48%] xl:w-[43.375rem] 2xl:w-[55rem] lg:h-full lg:min-h-[56.25rem]">
              {/* Stars Decoration - Mobile & Tablet */}
              <div className="absolute right-[1.5rem] top-[1rem] md:right-[42rem] md:top-[60rem] w-[3rem] h-[3.5rem] lg:hidden z-30">
                {/* Top Star */}
                <img src="/star.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.875rem] h-[0.875rem]" />
                {/* Left Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 left-0 -translate-y-1/2 w-[0.875rem] h-[0.875rem]" />
                {/* Right Star */}
                <img src="/star.png" alt="" className="absolute top-1/2 right-0 -translate-y-1/2 w-[0.875rem] h-[0.875rem]" />
                {/* Bottom Star */}
                <img src="/star.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[0.875rem] h-[0.875rem]" />
              </div>

              {/* Background Shape */}
              <div className="absolute top-0 right-0 md:-right-[3.1875rem] lg:right-0 w-full h-full bg-[#E7F4F6] rounded-bl-[4rem] sm:rounded-bl-[5rem] md:rounded-bl-[6rem] lg:rounded-bl-[7.4375rem]"></div>

              {/* People Image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-[1rem] xl:-left-[0.5rem] 2xl:left-[1rem] w-[22rem] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] xl:w-[37.5rem] 2xl:w-[48rem] h-[28rem] sm:h-[36rem] md:h-[42rem] lg:h-[48rem] xl:h-[50rem] 2xl:h-[60rem]">
                <img src="/hero-people.png" alt="People using SmashChat" className="w-full h-full object-cover object-top" />
              </div>

              {/* Shop with friends card */}
              <div className="absolute bottom-[4rem] sm:bottom-[5rem] md:bottom-[6rem] lg:bottom-[8rem] xl:bottom-[10rem] 2xl:bottom-[12rem] left-[-0.6rem] sm:left-[2rem] md:left-[-2rem] lg:-left-[3rem] xl:-left-[5rem] 2xl:-left-[6rem] bg-white rounded-full shadow-[0.25rem_0.25rem_3.625rem_rgba(0,0,0,0.12)] px-[1.25rem] sm:px-[1.5rem] md:px-[1.6875rem] py-[1rem] sm:py-[1.25rem] md:py-[1.5rem] flex items-center gap-[0.625rem] sm:gap-[0.75rem] md:gap-[1rem] z-20">
                <img src="/shop-icon.svg" alt="" className="w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem] md:w-[1.75rem] md:h-[1.75rem]" />
                <span className="text-[#00212A] text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] font-medium whitespace-nowrap">Shop with friends</span>
              </div>

              {/* Chat with friends card */}
              <div className="absolute top-[2rem] sm:top-[3rem] md:top-[4rem] lg:top-[12rem] xl:top-[12rem] 2xl:top-[10rem] right-[1rem] sm:right-[1.5rem] md:right-[2rem] lg:right-[2rem] xl:right-[3rem] 2xl:right-[4rem] bg-white rounded-full shadow-[0.25rem_0.25rem_3.625rem_rgba(0,0,0,0.12)] px-[1.25rem] sm:px-[1.5rem] md:px-[1.6875rem] py-[1rem] sm:py-[1.25rem] md:py-[1.5rem] flex items-center gap-[0.625rem] sm:gap-[0.75rem] md:gap-[1rem] z-20">
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