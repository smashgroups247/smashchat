import StarsDecoration from './StarsDecoration';


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
    <section className="pt-[3.75rem] relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[7rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        {/* Section Heading */}
        <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.375rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.75rem] xl:leading-[4rem] text-center text-[#00212A] mb-[2.5rem] sm:mb-[3rem] md:mb-[3.5rem] lg:mb-[4rem]">
          Why <span className="text-[#0096FF]">SmashChat</span> stands out.
        </h2>

       

        {/* Stars Decoration - Desktop */}
        <StarsDecoration className="hidden lg:block top-[54.0625rem] right-[8.25rem] w-[6.088rem] h-[6.801rem] lg:top-[0rem] lg:right-[3.25rem] xl:top-[1rem] xl:right-[4.25rem] 2xl:right-[45.25rem] 2xl:top-[5rem]" />

        {/* Stars Decoration - Mobile */}
        <StarsDecoration className="lg:hidden top-[0rem] right-[0rem] w-[3rem] h-[3.5rem]" />

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] items-center">
          {/* Left Side - Phone Mockups - Shows FIRST on mobile */}
          <div className="relative w-full flex justify-center lg:justify-start order-1">
            <div className="relative w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-none">
              {/* Decorative Cards - Desktop */}
              <div className="hidden lg:block">
                {/* Connect Card - LEFT side */}
                <div className="absolute bg-white rounded-[1.25rem] px-[1.25rem] py-[0.75rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.05rem] border-[#0096FF] z-10 top-[-2rem] left-[3rem] lg:top-[-19rem] lg:left-[2rem] xl:top-[-13rem] xl:left-[12rem] 2xl:top-[-12rem] md:top-[-10.5rem] md:left-[-3.5rem] 2xl:left-[11rem] [transform:rotate(-11.24deg)]">
                  <span className="text-[#00212A] text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">Connect</span>
                </div>

                {/* Chat Card - MIDDLE upper area */}
                <div className="absolute bg-white rounded-[1.25rem] px-[1.25rem] py-[0.75rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.05rem] border-[#0096FF] z-10 top-[2.5rem] left-[40%] lg:top-[-10rem] lg:left-[93%] xl:top-[-1.5rem] xl:left-[97%] 2xl:top-[-2.5rem] 2xl:left-[100%] [transform:translateX(-20%)_rotate(-13.4deg)]">
                  <span className="text-[#00212A] text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">Chat</span>
                </div>

                {/* Shop Card - RIGHT side */}
                <div className="absolute bg-white rounded-[1.25rem] px-[1.25rem] py-[0.75rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.05rem] border-[#0096FF] z-10 top-[5rem] right-[-3rem] lg:top-[-12rem] lg:right-[-30rem] xl:top-[-3rem] xl:right-[-44rem] 2xl:top-[-3rem] 2xl:right-[-28rem] [transform:rotate(-13.8deg)]">
                  <span className="text-[#00212A] text-[1.125rem] font-normal leading-[1.125rem] whitespace-nowrap">Shop</span>
                </div>
              </div>

              {/* Decorative Cards - Mobile */}
              <div className="lg:hidden">
                {/* Connect Card - LEFT */}
                <div className="absolute bg-white rounded-[1.25rem] px-[0.75rem] py-[0.375rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.025rem] border-[#0096FF] z-10 max-[424px]:top-[-9.5rem] left-[-0.5rem] [transform:rotate(-11.24deg)] top-[-7.5rem] md:top-[-9.5rem] -xl:top-[11rem] xl:left-[12rem]">
                  <span className="text-[#00212A] text-[0.625rem] font-normal leading-[0.625rem] whitespace-nowrap">Connect</span>
                </div>

                {/* Chat Card - MIDDLE */}
                <div className="absolute bg-white rounded-[1.25rem] px-[0.75rem] py-[0.375rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.025rem] border-[#0096FF] z-10 top-[1rem] left-[60%] [transform:translateX(-50%)_rotate(5.86deg)]">
                  <span className="text-[#00212A] text-[0.625rem] font-normal leading-[0.625rem] whitespace-nowrap">Chat</span>
                </div>

                {/* Shop Card - BOTTOM RIGHT */}
                <div className="absolute bg-white rounded-[1.25rem] px-[0.75rem] py-[0.375rem] shadow-[0_0.25rem_0.5rem_rgba(0,150,255,0.08)] border-[0.025rem] border-[#0096FF] z-10 bottom-[-3rem] right-[0.5rem] [transform:rotate(22deg)]">
                  <span className="text-[#00212A] text-[0.625rem] font-normal leading-[0.625rem] whitespace-nowrap">Shop</span>
                </div>
              </div>

              {/* Phone Mockups Container */}
              <div className="relative flex items-end justify-center lg:justify-start gap-[1.125rem] pt-[2rem] lg:pt-[4rem] pb-[2rem] lg:pb-0">
                {/* First Mockup */}
                <div className="relative bottom-[8.125rem] left-[1.875rem] z-20 w-[45%] sm:w-[12rem] md:w-[14rem] lg:w-[22.125rem]">
                  <img 
                    src="/mockup-1.png" 
                    alt="SmashChat interface" 
                    className="w-full h-auto"
                  />
                </div>

                {/* Second Mockup */}
                <div className="relative z-10 w-[48%] sm:w-[13rem] md:w-[15rem] lg:w-[21.3125rem] mb-[-0.5rem] sm:mb-[-1rem] lg:mb-[-1.5rem] bottom-[-2.5rem]">
                  <img 
                    src="/mockup-2.png" 
                    alt="SmashChat chat interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features - Shows SECOND on mobile */}
          <div className="space-y-[2rem] sm:space-y-[2.5rem] md:space-y-[3rem] lg:space-y-[1rem] order-2 w-full">
            {features.map((feature, index) => (
              <div key={index} className="space-y-[0.5rem] lg:space-y-[0.25rem]">
                <h3 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-bold leading-[1.6] sm:leading-[1.5] lg:leading-[4rem] text-[#00212A]">
                  {feature.title}
                </h3>
                <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] font-normal leading-[1.4] sm:leading-[1.5] lg:leading-[2.25rem] text-[#00212A]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}