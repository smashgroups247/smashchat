import React from 'react';
import StarsDecoration from './StarsDecoration';
import StarsDecorationWhite from './StarsDecorationWhite';

export default function AboutHeroSection() {
  return (
    <section className="relative bg-[#0096FFE5] pt-[10rem] sm:pt-[11rem] md:pt-[12rem] lg:pt-[13rem] pb-[25rem] sm:pb-[22rem] md:pb-[32rem] lg:pb-[40rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      
      {/* White Curved Background at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[20rem] bg-white z-0" style={{ borderTopLeftRadius: '50% 50px', borderTopRightRadius: '50% 50px' }}></div>

      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative">
        {/* Stars Decoration - White - Top Left (Desktop) */}
        <StarsDecorationWhite className="hidden lg:block absolute top-[18rem] left-[6rem] w-[6rem] h-[6rem] z-15" />

        {/* Stars Decoration - White - Top Right (Desktop) */}
        <StarsDecorationWhite className="hidden lg:block absolute top-[0rem] right-[4rem] w-[6rem] h-[6rem] z-15" />

        {/* Stars Decoration - Blue - Left Side (Desktop) */}
        <StarsDecoration className="hidden lg:block absolute top-[38rem] left-[0.5rem] w-[6rem] h-[6rem] z-15" />

        {/* Stars Decoration - Blue - Bottom Left (Desktop) */}
        <StarsDecoration className="hidden lg:block absolute bottom-[22rem] lg:bottom-[-36rem] lg:left-[56rem] left-[2rem] w-[6rem] h-[6rem] z-15" />

        {/* Stars Decoration - White - Mobile Top Right */}
        <StarsDecorationWhite className="lg:hidden absolute top-[1rem] right-[1rem] w-[3rem] h-[3rem] z-15 max-[424px]:right-[0rem] max-[424px]:top-[0rem]" />

    {/* Stars Decoration - White - Mobile Top Left */}
        {/* <StarsDecorationWhite className="lg:hidden absolute top-[10rem] right-[1rem] w-[3rem] h-[3rem] z-15 max-[424px]:right-[0rem] max-[424px]:top-[0rem]" /> */}

        {/* Stars Decoration - Blue - Mobile Left */}
        <StarsDecoration className="lg:hidden absolute top-[26rem] sm:top-[11rem] md:top-[12rem] left-[0.5rem] w-[3rem] h-[3rem] z-15" />

        {/* Connect Card - Desktop */}
        <div className="hidden lg:flex absolute top-[2rem] left-[7.5rem] w-[6.75rem] h-[2.8125rem] bg-[#0096FFE5] border border-white rounded-[1.25rem] items-center justify-center shadow-[0_0.3125rem_1.5625rem_rgba(0,0,0,0.12)] z-25" style={{ transform: 'rotate(-20.83deg)' }}>
          <span className="text-[#00212A] text-[1.125rem] font-normal leading-[100%] whitespace-nowrap">Connect</span>
        </div>

        {/* Shop Card - Desktop */}
        <div className="hidden lg:flex absolute xl:bottom-[-10rem] bottom-[24rem] left-[8rem] lg:bottom-[-15rem] lg:left-[8rem] xl:left-[16rem] w-[5.1875rem] h-[2.8125rem] bg-[#0096FFE5] border border-white rounded-[1.25rem] items-center justify-center shadow-[0_0.3125rem_1.5625rem_rgba(0,0,0,0.12)] z-25" style={{ transform: 'rotate(-11.37deg)' }}>
          <span className="text-[#00212A] text-[1.125rem] font-normal leading-[100%] whitespace-nowrap">Shop</span>
        </div>

        {/* Chat Card - Desktop */}
        <div className="hidden lg:flex absolute top-[16rem] lg:right-[10rem] lg:top-[18rem] right-[12rem] w-[4.9375rem] h-[2.8125rem] bg-[#0096FFE5] border border-white rounded-[1.25rem] items-center justify-center shadow-[0_0.3125rem_1.5625rem_rgba(0,0,0,0.12)] z-25" style={{ transform: 'rotate(17.5deg)' }}>
          <span className="text-[#00212A] text-[1.125rem] font-normal leading-[100%] whitespace-nowrap">Chat</span>
        </div>

        {/* Connect Card - Mobile */}
        <div className="flex lg:hidden absolute top-[0rem] sm:top-[8rem] md:top-[0rem] md:left-[3rem] left-[0.5rem] sm:left-[1rem] w-[4.5rem] sm:w-[5rem] h-[1.75rem] sm:h-[2rem] bg-[#0096FFE5] border border-white rounded-[0.875rem] sm:rounded-[1rem] items-center justify-center shadow-[0_0.3125rem_1.5625rem_rgba(0,0,0,0.12)] z-25" style={{ transform: 'rotate(-25deg)' }}>
          <span className="text-[#00212A] text-[0.625rem] sm:text-[0.75rem] font-normal leading-[100%] whitespace-nowrap">Connect</span>
        </div>

        {/* Shop Card - Mobile */}
        <div className="flex lg:hidden absolute bottom-[-8rem] sm:bottom-[16rem] md:bottom-[-9rem] md:left-[4rem] left-[0.5rem] sm:left-[1rem] w-[3.5rem] sm:w-[4rem] h-[1.75rem] sm:h-[2rem] bg-[#0096FFE5] border border-white rounded-[0.875rem] sm:rounded-[1rem] items-center justify-center shadow-[0_0.3125rem_1.5625rem_rgba(0,0,0,0.12)] z-25 max-[424px]:left-[0.25rem]" style={{ transform: 'rotate(-20deg)' }}>
          <span className="text-[#00212A] text-[0.625rem] sm:text-[0.75rem] font-normal leading-[100%] whitespace-nowrap">Shop</span>
        </div>

        {/* Chat Card - Mobile */}
        <div className="flex lg:hidden absolute top-[11rem] sm:top-[9rem] md:top-[14rem] md:right-[3rem] right-[0.5rem] sm:right-[1rem] w-[3rem] sm:w-[3.5rem] h-[1.75rem] sm:h-[2rem] bg-[#0096FFE5] border border-white rounded-[0.875rem] sm:rounded-[1rem] items-center justify-center shadow-[0_0.3125rem_1.5625rem_rgba(0,0,0,0.12)] z-25 " style={{ transform: 'rotate(15deg)' }}>
          <span className="text-[#00212A] text-[0.625rem] sm:text-[0.75rem] font-normal leading-[100%] whitespace-nowrap">Chat</span>
        </div>

        {/* Content Container */}
        <div className="max-w-[45rem] sm:max-w-[50rem] lg:max-w-[60rem] mx-auto space-y-[1.25rem] sm:space-y-[1.5rem] text-center relative z-20 pt-[2rem] sm:pt-[2.5rem] lg:pt-[3rem]">
          {/* Main Heading */}
          <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.5rem] lg:text-[3.375rem] font-bold leading-[1.8rem] sm:leading-[2.1rem] md:leading-[3rem] lg:leading-[4rem] text-[#00212A] px-[0.5rem]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Built in Africa. Built for connection.
          </h1>

          {/* Sub-heading */}
          <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] font-normal leading-[1.3125rem] sm:leading-[1.5rem] md:leading-[1.6875rem] lg:leading-[2.25rem] text-[#00212A] max-w-[40rem] sm:max-w-[45rem] mx-auto px-[0.5rem]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Smashchat was created to make chatting and shopping feel natural, all from one app that understands how Africa connects.
          </p>
        </div>

        {/* Phone Mockups Container - Positioned at Bottom */}
        <div className="absolute bottom-[-20rem] sm:bottom-[3rem] md:bottom-[-25rem] lg:bottom-[8rem] left-1/2 -translate-x-1/2 w-full flex justify-center items-end z-30">
          <div className="relative flex justify-center items-end lg:top-[46.875rem]">
            {/* Mockup 1 (Left Phone) */}
            <div className="relative w-[8rem] sm:w-[9rem] md:w-[11rem] lg:w-[16.333125rem] bottom-[1rem] lg:bottom-[1.875rem] h-auto z-30">
              <img 
                src="/about-hero-phone-1.png" 
                alt="SmashChat interface" 
                className="w-full h-auto"
              />
            </div>

            {/* Mockup 2 (Right Phone) - Overlapping */}
            <div className="relative w-[9rem] sm:w-[10rem] md:w-[12rem] lg:w-[17.98967925rem] h-auto z-40 ml-[-1.5rem] sm:ml-[-2rem] md:ml-[-2.5rem] lg:ml-[-3rem]">
              <img 
                src="/about-hero-phone-2.png" 
                alt="SmashChat chat interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}