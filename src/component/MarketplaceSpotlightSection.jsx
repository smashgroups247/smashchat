import React from 'react';
import StarsDecoration from './StarsDecoration';

export default function MarketplaceSpotlightSection() {
  return (
    <section className="relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] sm:w-[50rem] sm:h-[50rem] lg:w-[63.3125rem] lg:h-[63.3125rem] pointer-events-none opacity-100 z-0 left-[-20%] max-[424px]:left-[-30%] md:left-[-7%] lg:left-[-5.5rem] 2xl:left-[40rem]">
        <img 
          src="/marketplace-bg.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative z-10">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] items-center">
          {/* Left Side - Phone Mockups - Shows FIRST on mobile */}
          <div className="relative w-full flex justify-center lg:justify-start order-1">
            <div className="relative w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[34.0625rem] h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[44.1875rem]">
              {/* Bottom-left phone (behind) */}
              <div className="absolute z-10 w-[60%] sm:w-[65%] lg:w-[17.875rem] top-[1.5rem] sm:top-[2rem] lg:top-[1.375rem] left-0">
                <img 
                  src="/marketplace-phone-left.png" 
                  alt="Product details interface" 
                  className="w-full h-auto"
                />
              </div>

              {/* Top-right phone (front) */}
              <div className="absolute z-20 w-[70%] sm:w-[75%] lg:w-[19.6875rem] top-0 right-0 sm:right-[0.5rem] lg:right-0">
                <img 
                  src="/marketplace-phone-right.png" 
                  alt="Marketplace interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

     {/* Stars Decoration - Desktop */}
        <StarsDecoration className="hidden lg:block top-[54.0625rem] right-[8.25rem] w-[6.088rem] h-[6.801rem] md:top-[38rem] md:right-[0rem] lg:top-[0rem] lg:right-[3.25rem] xl:top-[1rem] xl:right-[4.25rem] 2xl:right-[1.55rem] 2xl:top-[3rem]" />

        {/* Stars Decoration - Mobile */}
        <StarsDecoration className="lg:hidden top-[23rem] right-[0rem] w-[3rem] h-[3.5rem]" />

          {/* Right Side - Content - Shows SECOND on mobile */}
          <div className="pt-[6.25rem] md:pt-[15rem] lg:pt-0 relative space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem] order-2 w-full">
            {/* Heading */}
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.375rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.75rem] xl:leading-[4rem] text-center lg:text-left text-[#00212A]">
              Marketplace <span className="text-[#0096FF]">Spotlight</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[1.5] xl:leading-[2.625rem] text-center lg:text-left text-[#00212A] max-w-[35rem] lg:max-w-[40rem] mx-auto lg:mx-0">
              No more jumping apps. On Smashchat you can message, discover products, and pay all within your chat window. Imagine this: you message a vendor, tap a product card that shows in the chat, preview it, pay instantly. That's it.
            </p>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-[0.5rem] bg-[#0096FF] text-white font-bold px-[2rem] py-[1rem] rounded-[1.25rem] hover:bg-[#0085e6] transition-colors text-[1rem] leading-[1.5rem] whitespace-nowrap shadow-sm"
              >
                <img src="/download-icon.svg" alt="" className="w-[1rem] h-[1rem]" />
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}