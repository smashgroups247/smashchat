import React from 'react';

export default function CTASection() {
  return (
    <section className="relative bg-[#0096FF] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] xl:gap-[5rem] items-center">
          {/* Right Side - Images - Shows FIRST on mobile */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full max-w-[28rem] mx-auto lg:max-w-none lg:w-full h-[25rem] sm:h-[30rem] lg:h-[35rem] xl:h-[40rem]">
              {/* Image Grid/Collage */}
              <div className="grid grid-cols-3 grid-rows-4 gap-[0.75rem] lg:gap-[1rem] h-full">
                {/* Top-left image */}
                <div className="col-span-1 row-span-2">
                  <img 
                    src="/cta-user-1.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>

                {/* Top-center image (tall) */}
                <div className="col-span-1 row-span-2 row-start-1">
                  <img 
                    src="/cta-user-2.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>

            
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}