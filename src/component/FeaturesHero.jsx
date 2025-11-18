import React from 'react';
import DownloadAppButton from './DownloadAppButton';
import StarsDecoration from './StarsDecoration';
import StarsDecorationWhite from './StarsDecorationWhite';

const FeaturesHero = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden relative pt-24 md:pt-28">
        {/* Container for image to measure its height */}
        <div className="relative">
          {/* Blue Background - Full Height extending to absolute top with left margin, covering image */}
          <div className="absolute -top-24 md:-top-28 right-0 left-[3rem] bottom-0 bg-[#0096FF] rounded-bl-[4rem]">
            {/* White Stars Decoration on Blue Background */}
            <StarsDecorationWhite className="top-28 md:top-32 right-4 w-12 h-12 z-10" />
          </div>

          {/* Blue Stars Decoration on Left */}
          <StarsDecoration className="absolute top-[15rem] left-[-0.5rem] md:top-[30rem] md:left-[-0.5rem] w-12 h-12 z-20" />

          {/* Image Section */}
          <div className="relative w-full pl-[3rem] z-10">
            <div className="relative w-full aspect-square max-w-full">
              <img
                src="/hero-girl.png"
                alt="Happy person using SmashChat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative px-4 py-8 z-10">
          <h1 className="font-bold text-[2rem] leading-[2.5rem] text-[#00212A] mb-4">
            Everything you need. One place to do it.
          </h1>
          <p className="text-[0.875rem] leading-[1.375rem] text-[#00212A] mb-6">
            SmashChat blends social and shopping into one powerful experience. Here's what you can do.
          </p>
          <DownloadAppButton />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative lg:pt-32 xl:pt-40">
        {/* Blue Background - Full Height extending to top, constrained on 2xl to align with navbar end */}
        <div className="absolute top-0 lg:right-0 lg:w-1/2 2xl:right-auto 2xl:left-1/2 2xl:w-[45rem] h-full bg-[#0096FF] rounded-bl-[4rem]">
          {/* White Stars Decoration on Blue Background */}
          <StarsDecorationWhite className="top-32 left-8 w-16 h-16 z-10" />
        </div>

        <div className="relative lg:max-w-[90rem] lg:mx-auto lg:px-8 xl:px-16 2xl:px-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-end">
            {/* Left Side - Text Content */}
            <div className="relative flex flex-col justify-center pb-16 lg:pb-20 xl:pb-24 pr-8 xl:pr-12 z-20">
              {/* Blue Stars Decoration on Left */}
              <StarsDecoration className="top-0 -left-8 w-16 h-16 z-0 lg:left-[-4rem] xl:top-[0.75rem] xl:left-[-5rem]" />
              
              <h1 className="font-bold text-[4rem] leading-[4.75rem] text-[#00212A] mb-6">
                Everything you need. One place to do it.
              </h1>
              <p className="text-[1.75rem] leading-[2.625rem] text-[#00212A] mb-8">
                SmashChat blends social and shopping into one powerful experience. Here's what you can do.
              </p>
              <div className="flex">
                <DownloadAppButton />
              </div>
            </div>

            {/* Right Side - Image aligned to bottom */}
            <div className="relative flex items-end justify-end z-10 pb-0">
              <div className="w-full max-w-[48rem] h-auto">
                <img
                  src="/hero-girl.png"
                  alt="Happy person using SmashChat"
                  className="w-full h-auto object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;