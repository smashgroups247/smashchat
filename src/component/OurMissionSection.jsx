import StarsDecoration from "./StarsDecoration";
import ImageGrid from "./ImageGrid";

export default function OurMissionSection() {
  return (
    <section className="relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      {/* Stars Decoration - Top Left (Desktop) */}
      <StarsDecoration className="hidden lg:block absolute top-[2rem] left-[2rem] w-[4rem] h-[4rem] z-10" />
      
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[4rem] xl:gap-[6rem] items-center">
          
          {/* Left Side - Content - Shows FIRST on mobile */}
          <div className="relative w-full order-1 lg:order-1 space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem]">
            {/* "Our Mission" Card */}
            <div className="flex justify-center lg:justify-start">
              <div 
                className="inline-flex items-center justify-center gap-[0.5rem] bg-white px-[1.25rem] py-[0.75rem] rounded-[1.25rem] border-[0.05rem] border-[#0096FF] shadow-[0_0.25rem_0.5rem_rgba(255,188,3,0.19)]"
                style={{ transform: 'rotate(-10deg)' }}
              >
                <span className="text-[#00212A] text-[1rem] sm:text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">
                  Our Mission
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.5rem] text-[#00212A] text-center lg:text-left">
              To connect Africa through <span className="text-[#0096FF]">conversations that matter.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[2.25rem] text-[#00212A] max-w-[35rem] lg:max-w-[40rem] text-center lg:text-left mx-auto lg:mx-0">
              We're building more than an app. SmashChat is about empowering people, from friends staying in touch to local vendors finding new customers. Every message, every transaction, every shared link brings us closer to a more connected continent.
            </p>
          </div>

          {/* Right Side - Image Grid - Shows SECOND on mobile */}
          <div className="relative w-full order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
              <ImageGrid />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}