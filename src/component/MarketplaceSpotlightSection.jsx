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

      
    </section>
  );
}