import React from 'react';
import DownloadAppButton from './DownloadAppButton';

const FeaturesHero = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Image Section with Blue Background */}
        <div className="relative w-full bg-[#0096FF] rounded-bl-[4rem] overflow-hidden">
          <div className="relative w-full aspect-square max-w-[23.75rem] mx-auto">
            <img
              src="/hero-girl.png"
              alt="Happy person using SmashChat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="px-4 py-8">
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
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center lg:min-h-[47.375rem] lg:max-w-[90rem] lg:mx-auto lg:px-8 xl:px-16 2xl:px-20">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center py-16 lg:py-20 xl:py-24 pr-8 xl:pr-12">
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

        {/* Right Side - Image with Blue Background */}
        <div className="relative flex items-center justify-center">
          {/* Blue Background */}
          <div className="absolute top-0 right-0 w-[45rem] h-[47.375rem] bg-[#0096FF] rounded-bl-[4rem]"></div>
          
          {/* Image */}
          <div className="relative z-10 w-[45.5rem] h-[45.5rem]">
            <img
              src="/hero-girl.png"
              alt="Happy person using SmashChat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;