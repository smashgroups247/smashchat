import StarsDecoration from './StarsDecoration';
import DownloadAppButton from './DownloadAppButton';

export default function HowItWorksHero() {
  return (
    <section className="relative bg-white pt-[8rem] lg:pt-[18rem] pb-[3rem] sm:pb-[4rem] md:pb-[5rem] lg:pb-[6rem] xl:pb-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      {/* Blue Stars Decoration - Top Right */}
      <StarsDecoration className="hidden lg:block absolute top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem] 2xl:top-[8rem]" />
      
      {/* Blue Stars Decoration - Left Side (Desktop) */}
      <StarsDecoration className="hidden lg:block absolute top-[14rem] left-[2rem] w-[6rem] h-[6rem] z-10 lg:top-[22rem] lg:left-[-2rem] xl:top-[21rem] xl:left-[-2rem] 2xl:left-[30rem] " />
      
      {/* Blue Stars Decoration - Mobile */}
      <StarsDecoration className="block lg:hidden absolute top-[1rem] right-[1rem] w-[2rem] h-[2rem] z-10" />
      
      {/* Left Decorative Curve */}
      <img 
        src="/left-decorative-curve.png" 
        alt="decorative curve" 
        className="hidden lg:block absolute pointer-events-none z-0 w-[4.875rem] h-[4.875rem] top-[35rem] left-[1.625rem] xl:top-[40rem] 2xl:left-[32rem]"
      />
      
      {/* Right Decorative Curve */}
      <img 
        src="/right-decorative-curve.png" 
        alt="decorative curve" 
        className="lg:block absolute pointer-events-none z-0 w-[6rem] h-[1rem] lg:w-[11.25rem] lg:h-[2.1875rem] top-[17.5rem] max-[424px]:left-[18rem] left-[21rem] md:top-[22rem] md:left-[40rem] lg:top-[35rem] lg:left-[46rem] xl:top-[35rem] xl:left-[60rem] 2xl:left-[100rem]"
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