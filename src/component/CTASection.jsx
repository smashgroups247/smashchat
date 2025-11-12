import StarsDecorationWhite from "./StarsDecorationWhite";
import ImageGrid from "./ImageGrid";

export default function CTASection() {
  return (
    <section className="relative bg-[#0096FF] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      {/* Top-right decoration */}
      <div className="absolute top-[-0.1875rem] right-0 w-[20rem] h-[10rem] sm:w-[25rem] sm:h-[12.5rem] lg:w-[30.75rem] lg:h-[15.5rem] pointer-events-none z-0">
        <img
          src="/cta-decoration.png"
          alt="cta-decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative z-10">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] xl:gap-[5rem] items-center">
          {/* Right Side - Images - Shows FIRST on mobile */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full max-w-[28rem] mx-auto lg:max-w-none lg:w-full h-[25rem] sm:h-[30rem] lg:h-[35rem] xl:h-[40rem]">
             <ImageGrid />
            </div>
          </div>

          {/* Stars Decoration - Desktop */}
          <StarsDecorationWhite className="hidden lg:block top-[54.0625rem] right-[8.25rem] w-[6.088rem] h-[6.801rem] lg:top-[-6rem] lg:right-[58.25rem] xl:top-[-8rem] xl:right-[84.25rem] 2xl:right-[82.55rem] 2xl:top-[-8rem]" />

          {/* Stars Decoration - Mobile */}
          <StarsDecorationWhite className="top-[25rem] right-[23rem] w-[3rem] h-[3.5rem] max-[424px]:top-[25rem] max-[424px]:right-[20rem] md:right-[44rem] md:top-[28rem] lg:hidden" />

          {/* Left Side - Content - Shows SECOND on mobile */}
          <div className="relative space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem] order-2 lg:order-1 w-full pt-[15.625rem] lg:pt-[0]">
            {/* Heading */}
            <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] font-bold leading-[1.8rem] sm:leading-[2.1rem] md:leading-[2.4rem] lg:leading-[2.7rem] xl:leading-[3rem] text-center lg:text-left text-[#00212A]">
              Ready to chat, connect, and shop, all in one place?
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[1.5] xl:leading-[2.25rem] text-center lg:text-left text-[#00212A] max-w-[35rem] lg:max-w-[40rem] mx-auto lg:mx-0">
              Chat with friends. Support local sellers. Grow together. All in
              one app made for how Africa connects.
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
