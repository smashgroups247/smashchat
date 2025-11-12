
import StarsDecoration from './StarsDecoration';
import DownloadAppButton from './DownloadAppButton';
export default function HowItWorksHero() {
  return (
    <section className="relative bg-white pt-[6rem] sm:pt-[7rem] md:pt-[8rem] lg:pt-[9rem] pb-[3rem] sm:pb-[4rem] md:pb-[5rem] lg:pb-[6rem] xl:pb-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      {/* Blue Stars Decoration - Top Right */}
      <StarsDecoration className="hidden lg:block absolute top-[1rem] right-[1rem] w-[3rem] h-[3rem] z-10" />
      
      {/* Blue Stars Decoration - Left Side (Desktop) */}
      <StarsDecoration className="hidden lg:block absolute top-[14rem] left-[2rem] w-[3rem] h-[3rem] z-10" />
      
      {/* Blue Stars Decoration - Mobile */}
      <StarsDecoration className="block lg:hidden absolute top-[1rem] right-[1rem] w-[2rem] h-[2rem] z-10" />
      
      {/* Left Decorative Curve */}
      <img 
        src="/left-decorative-curve.png" 
        alt="decorative curve" 
        className="hidden lg:block absolute pointer-events-none z-0"
        style={{
          width: '4.875rem',
          height: '4.875rem',
          top: '27.375rem',
          left: '1.625rem'
        }}
      />
      
      {/* Right Decorative Curve */}
      <img 
        src="/right-decorative-curve.png" 
        alt="decorative curve" 
        className="hidden lg:block absolute pointer-events-none z-0"
        style={{
          width: '11.25rem',
          height: '2.1875rem',
          top: '23.125rem',
          left: '66.5625rem'
        }}
      />
      
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative z-10">
        {/* Content Container */}
        <div className="flex flex-col items-center space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2.5rem]">
          
          {/* Heading */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold leading-[2.5rem] sm:leading-[3rem] md:leading-[3.75rem] lg:leading-[4.75rem] text-center text-[#00212A] max-w-[20rem] sm:max-w-[30rem] md:max-w-[45rem] lg:max-w-[55rem]">
            How <span className="text-[#0096FF]">Smashchat</span> actually works
          </h1>

          {/* Paragraph */}
          <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.5rem] lg:text-[1.75rem] font-normal leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2.25rem] lg:leading-[2.625rem] text-center text-[#00212A] max-w-[18rem] sm:max-w-[28rem] md:max-w-[38rem] lg:max-w-[45rem]">
            We kept it simple just chat, discover, and shop. Nothing complicated.
          </p>

          {/* Download Button */}
          <DownloadAppButton />

        </div>
      </div>
    </section>
  );
}