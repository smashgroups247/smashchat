import React from "react";

export default function SyncContactsSection() {
  return (
    <section className="relative bg-white lg:pt-[0rem] py-[7rem] sm:py-[4rem] md:py-[10rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative z-10">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] items-center">
          {/* Left Side - Content - Shows FIRST on mobile and desktop */}
          <div className="relative space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem] order-1 w-full">
            {/* Heading */}
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.375rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.75rem] xl:leading-[4rem] text-center lg:text-left text-[#00212A]">
              Sync your{" "}
              <span className="text-[#0096FF]">contacts</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[1.5] xl:leading-[2.625rem] text-center lg:text-left text-[#00212A] max-w-[35rem] lg:max-w-[40rem] mx-auto lg:mx-0">
              SmashChat automatically connects you to your existing contacts, so you can start chatting right away. No "add friend" stress.
            </p>
          </div>

          {/* Right Side - Phone Mockups - Shows SECOND on mobile and desktop */}
          <div className="relative w-full flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[34.0625rem] h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[44.1875rem]">
              {/* Bottom-left phone (behind) */}
              <div className="absolute z-10 w-[60%] sm:w-[65%] lg:w-[17.875rem] top-[1.5rem] sm:top-[2rem] lg:top-[1.375rem] left-0 max-[424px]:left-[0.625rem]">
                <img
                  src="/sync-phone-left.png"
                  alt="New Contact interface"
                  className="w-full h-auto"
                />
              </div>

              {/* Top-right phone (front) */}
              <div className="absolute z-20 w-[70%] sm:w-[75%] lg:w-[19.6875rem] top-0 right-[-1.5rem] sm:right-[0.5rem] md:right-[-5.5rem] lg:right-0 max-[424px]:right-[-0.5rem]">
                <img
                  src="/sync-phone-right.png"
                  alt="All Contacts interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}