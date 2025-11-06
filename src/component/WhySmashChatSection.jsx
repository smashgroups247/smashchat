import React from 'react';

export default function WhySmashChatSection() {
  const features = [
    {
      title: "Chat without limits",
      description: "Text, voice or video stay close to friends, family and business."
    },
    {
      title: "Your circle, your marketplace",
      description: "Browse and buy from contacts or trusted vendors."
    },
    {
      title: "Top-tier security",
      description: "End-to-end encryption keeps your messages and payments safe."
    },
    {
      title: "Built for Africa",
      description: "Payments. Connectivity. Local vendors. We've got you covered."
    }
  ];

  return (
    <section className="relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[7rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        {/* Section Heading */}
        <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.375rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.75rem] xl:leading-[4rem] text-center text-[#00212A] mb-[2.5rem] sm:mb-[3rem] md:mb-[3.5rem] lg:mb-[4rem]">
          Why <span className="text-[#0096FF]">SmashChat</span> stands out.
        </h2>

        {/* Curved Lines - Desktop */}
        <div className="hidden lg:block absolute left-0 top-[3rem] pointer-events-none">
          <img src="/curved-line-1.png" alt="" className="absolute" style={{ top: '0rem', left: '0rem' }} />
          <img src="/curved-line-2.png" alt="" className="absolute" style={{ top: '0rem', left: '0rem' }} />
          <img src="/curved-line-3.png" alt="" className="absolute" style={{ top: '0rem', left: '0rem' }} />
        </div>

        {/* Curved Lines - Mobile */}
        <div className="lg:hidden absolute left-0 top-[2rem] pointer-events-none">
          <img src="/curved-line-mobile-1.png" alt="" className="absolute" style={{ top: '0rem', left: '0rem' }} />
          <img src="/curved-line-mobile-2.png" alt="" className="absolute" style={{ top: '0rem', left: '0rem' }} />
          <img src="/curved-line-mobile-3.png" alt="" className="absolute" style={{ top: '0rem', left: '0rem' }} />
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] items-center">
          {/* Left Side - Phone Mockups - Shows FIRST on mobile */}
          <div className="relative w-full flex justify-center lg:justify-start order-1">
            <div className="relative w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-none">
              {/* Decorative Cards - Desktop */}
              <div className="hidden lg:block">
                {/* Connect Card - LEFT side */}
                <div 
                  className="absolute bg-white rounded-[1.25rem] px-[1.25rem] py-[0.75rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.05rem] border-[#0096FF] z-10"
                  style={{
                    top: '-2rem',
                    left: '3rem',
                    transform: 'rotate(8.76deg)',
                    width: 'fit-content'
                  }}
                >
                  <span className="text-[#00212A] text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">Connect</span>
                </div>

                {/* Chat Card - MIDDLE upper area */}
                <div 
                  className="absolute bg-white rounded-[1.25rem] px-[1.25rem] py-[0.75rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.05rem] border-[#0096FF] z-10"
                  style={{
                    top: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-20%) rotate(5.86deg)',
                    width: 'fit-content'
                  }}
                >
                  <span className="text-[#00212A] text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">Chat</span>
                </div>

                {/* Shop Card - RIGHT side */}
                <div 
                  className="absolute bg-white rounded-[1.25rem] px-[1.25rem] py-[0.75rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.05rem] border-[#0096FF] z-10"
                  style={{
                    top: '5rem',
                    right: '-3rem',
                    transform: 'rotate(-13.8deg)',
                    width: 'fit-content'
                  }}
                >
                  <span className="text-[#00212A] text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">Shop</span>
                </div>
              </div>

              {/* Decorative Cards - Mobile */}
              <div className="lg:hidden">
                {/* Connect Card - LEFT */}
                <div 
                  className="absolute bg-white rounded-[1.25rem] px-[0.75rem] py-[0.375rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.025rem] border-[#0096FF] z-10"
                  style={{
                    top: '-0.5rem',
                    left: '-0.5rem',
                    transform: 'rotate(8.76deg)',
                    width: 'fit-content'
                  }}
                >
                  <span className="text-[#00212A] text-[0.625rem] font-normal leading-[0.625rem] whitespace-nowrap">Connect</span>
                </div>

                {/* Chat Card - MIDDLE */}
                <div 
                  className="absolute bg-white rounded-[1.25rem] px-[0.75rem] py-[0.375rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.025rem] border-[#0096FF] z-10"
                  style={{
                    top: '6rem',
                    left: '40%',
                    transform: 'translateX(-50%) rotate(5.86deg)',
                    width: 'fit-content'
                  }}
                >
                  <span className="text-[#00212A] text-[0.625rem] font-normal leading-[0.625rem] whitespace-nowrap">Chat</span>
                </div>

             
              </div>

         
        </div>
      </div>
    </section>
  );
}