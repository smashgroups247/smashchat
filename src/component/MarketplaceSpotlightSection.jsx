import React from 'react';

export default function MarketplaceSpotlightSection() {
  return (
    <section className="relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] sm:w-[50rem] sm:h-[50rem] lg:w-[63.3125rem] lg:h-[63.3125rem] pointer-events-none opacity-100 z-0 lg:left-[-5.5rem]">
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

        </div>
      </div>
    </section>
  );
}