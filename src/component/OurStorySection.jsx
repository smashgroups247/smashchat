import React from "react";

export default function OurStorySection() {
  return (
    <section className="relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[4rem] xl:gap-[6rem] items-center">
          
          {/* Right Side - Content - Shows FIRST on mobile */}
          <div className="relative w-full order-1 lg:order-2 space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem]">
            {/* "Our Story" Card - Center aligned */}
            <div className="flex justify-center lg:justify-start">
              <div 
                className="inline-flex items-center justify-center gap-[0.5rem] bg-white px-[1.25rem] py-[0.75rem] rounded-[1.25rem] border-[0.05rem] border-[#0096FF] shadow-[0_0.25rem_0.5rem_rgba(255,188,3,0.19)]"
                style={{ transform: 'rotate(5deg)' }}
              >
                <span className="text-[#00212A] text-[1rem] sm:text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">
                  Our Story
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.5rem] text-[#00212A] text-center lg:text-left">
              It started with one <span className="text-[#0096FF]">simple idea.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[2.25rem] text-[#00212A] max-w-[35rem] lg:max-w-[40rem] text-center lg:text-left mx-auto lg:mx-0">
              We talk, we trade, we connect often all at once. Yet our apps kept those things apart. SmashChat was born to change that. We wanted a place where your conversations could lead straight to opportunities, where local businesses can reach buyers directly, and where friends can chat, share, and shop in one smooth flow.
            </p>
          </div>

          {/* Left Side - Phone Mockups - Shows SECOND on mobile */}
          <div className="relative w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem] h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[45rem]">
              
              {/* Left Phone Mockup (Red) - Reduced width for more spacing */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[42%] lg:w-[42%] z-10">
                <img 
                  src="/story-phone-red.png" 
                  alt="SmashChat app interface" 
                  className="w-full h-auto"
                />
              </div>

              {/* Right Phone Mockups (Blue + Man with Package) - Reduced width for more spacing */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[42%] lg:w-[42%] z-20">
                {/* Blue Phone Mockup */}
                <img 
                  src="/story-phone-blue.png" 
                  alt="SmashChat delivery interface" 
                  className="w-full h-auto relative z-10"
                />
                
                {/* Man with Package Image - Smaller size to fit inside frame */}
                <div className="absolute top-[10%] left-[8%] w-[75%] h-[70%] z-20 overflow-visible rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem]">
                  <img 
                    src="/story-delivery-man.png" 
                    alt="Delivery person" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}