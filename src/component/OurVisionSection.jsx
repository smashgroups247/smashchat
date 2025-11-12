import React from "react";

export default function OurVisionSection() {
  return (
    <section className="relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[2rem] xl:gap-[3rem] items-center">
          
          {/* Right Side - Content - Shows FIRST on mobile */}
          <div className="relative w-full order-1 lg:order-2 space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem]">
            {/* "Our Vision" Card - Center aligned */}
            <div className="flex justify-center">
              <div 
                className="inline-flex items-center justify-center gap-[0.5rem] bg-white px-[1.25rem] py-[0.75rem] rounded-[1.25rem] border-[0.05rem] border-[#0096FF] shadow-[0_0.25rem_0.5rem_rgba(255,188,3,0.19)]"
                style={{ transform: 'rotate(-10deg)' }}
              >
                <span className="text-[#00212A] text-[1rem] sm:text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">
                  Our Vision
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.5rem] text-[#00212A] text-center lg:text-left">
              A connected Africa where <span className="text-[#0096FF]">social meets commerce.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[2.25rem] text-[#00212A] max-w-[35rem] lg:max-w-[40rem] text-center lg:text-left mx-auto lg:mx-0">
              We believe the future of African social media is one where chatting, buying, and selling happen naturally, safely, and locally. That's what drives us every day.
            </p>
          </div>

          {/* Left Side - Image - Shows SECOND on mobile */}
          <div className="relative w-full order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[28rem] lg:max-w-[31.5rem] aspect-square">
              <img 
                src="/vision-woman-blue.png" 
                alt="Woman with phone" 
                className="w-full h-full object-cover rounded-[3.75rem]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}