import React from 'react';

export default function CTASection() {
  return (
    <section className="relative bg-[#0096FF] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      {/* Top-right decoration */}
      <div className="absolute top-[-0.1875rem] right-0 w-[20rem] h-[10rem] sm:w-[25rem] sm:h-[12.5rem] lg:w-[30.75rem] lg:h-[15.5rem] pointer-events-none z-0">
        <img 
          src="/cta-decoration.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative z-10">
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

                {/* Top-right image */}
                <div className="col-span-1 row-span-2 row-start-1">
                  <img 
                    src="/cta-user-3.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>

                {/* Middle-left image */}
                <div className="col-span-1 row-span-1 row-start-3">
                  <img 
                    src="/cta-user-4.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>

                {/* Middle-center image */}
                <div className="col-span-1 row-span-2 row-start-3">
                  <img 
                    src="/cta-user-5.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>

                {/* Middle-right image */}
                <div className="col-span-1 row-span-1 row-start-3">
                  <img 
                    src="/cta-user-6.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>

                {/* Bottom-left image (wide) */}
                <div className="col-span-1 row-span-1 row-start-4">
                  <img 
                    src="/cta-user-7.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>

                {/* Bottom-right image */}
                <div className="col-span-1 row-span-1 row-start-4 col-start-3">
                  <img 
                    src="/cta-user-8.png" 
                    alt="SmashChat user" 
                    className="w-full h-full object-cover rounded-[1rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Side - Content - Shows SECOND on mobile */}
          <div className="relative space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem] order-2 lg:order-1 w-full">
            {/* Heading */}
            <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] font-bold leading-[1.8rem] sm:leading-[2.1rem] md:leading-[2.4rem] lg:leading-[2.7rem] xl:leading-[3rem] text-center lg:text-left text-[#00212A]">
              Ready to chat, connect, and shop, all in one place?
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[1.5] xl:leading-[2.25rem] text-center lg:text-left text-[#00212A] max-w-[35rem] lg:max-w-[40rem] mx-auto lg:mx-0">
              Chat with friends. Support local sellers. Grow together. All in one app made for how Africa connects.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-[0.75rem] sm:gap-[1rem] justify-center lg:justify-start">
              <a href="#" className="block">
                <img 
                  src="/app-store-button.png" 
                  alt="Download on App Store" 
                  className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[8rem] xl:w-[9rem] h-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="/google-play-button.png" 
                  alt="Get it on Google Play" 
                  className="w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[8rem] xl:w-[9rem] h-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}