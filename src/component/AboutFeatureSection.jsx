import StarsDecorationWhite from "./StarsDecorationWhite";
import QRCodeContainer from "./QRCodeContainer";

export default function SharedCTASection() {
  return (
    <section className="relative bg-[#0096FF] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
        
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative z-10">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] xl:gap-[5rem] items-center">
          {/* Right Side - QR Code - Shows FIRST on mobile */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full max-w-[28rem] mx-auto lg:max-w-none lg:w-full h-[25rem] sm:h-[30rem] lg:h-[35rem] xl:h-[40rem] flex flex-col items-center justify-center">
              {/* QR Code Container with white background */}
              <QRCodeContainer />
              
              {/* Scan to Install text */}
              <div className="mt-[1rem] flex items-center gap-[0.5rem]">
                <svg className="w-[1.25rem] h-[1.25rem]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9V6C3 4.89543 3.89543 4 5 4H8M16 4H19C20.1046 4 21 4.89543 21 6V9M21 16V19C21 20.1046 20.1046 21 19 21H16M8 21H5C3.89543 21 3 20.1046 3 19V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-white text-[0.875rem] sm:text-[1rem] font-medium">Scan to Install</span>
              </div>
            </div>
          </div>

          {/* Stars Decoration - Desktop */}
          <StarsDecorationWhite className="hidden lg:block top-[54.0625rem] right-[8.25rem] w-[6.088rem] h-[6.801rem] lg:top-[-6rem] lg:right-[58.25rem] xl:top-[-8rem] xl:right-[84.25rem] 2xl:right-[82.55rem] 2xl:top-[-8rem]" />

          {/* Stars Decoration - Mobile */}
          <StarsDecorationWhite className="top-[20rem] right-[23rem] w-[3rem] h-[3.5rem] max-[424px]:top-[20rem] max-[424px]:right-[20rem] md:right-[44rem] md:top-[28rem] lg:hidden" />

          {/* Left Side - Content - Shows SECOND on mobile */}
          <div className="relative top-[-4.375rem] lg:top-[0rem] space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem] order-2 lg:order-1 w-full">
            {/* Heading */}
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold leading-[2.5rem] lg:leading-[3rem] text-center lg:text-left text-[#00212A]">
              Let's build the future of connection together.
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] lg:text-[1.5rem] font-normal leading-[1.375rem] lg:leading-[2.25rem] text-center lg:text-left text-[#00212A] max-w-[35rem] lg:max-w-[40rem] mx-auto lg:mx-0">
              Whether you're a user, vendor, or developer SmashChat has a place for you.
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