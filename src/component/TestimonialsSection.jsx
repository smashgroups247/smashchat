import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      text: "I didn't think chat could bring real customers. Now, I can't imagine business without it.",
      name: "Kevin Hart",
      avatar: "/testimonial-avatar-1.png"
    },
    {
      text: "It felt less like shopping and more like chatting with a friend and gets what I need.",
      name: "Quincy Agu",
      avatar: "/testimonial-avatar-2.png"
    },
    {
      text: "I used to dread shopping. Now, I chat with vendors directly.",
      name: "Omotola",
      avatar: "/testimonial-avatar-3.png"
    },
    {
      text: "My shop chat used to sound impossible. Now it's my channel.",
      name: "Charlie Brown",
      avatar: "/testimonial-avatar-4.png"
    },
    {
      text: "People trust me more now because we talk first before they buy.",
      name: "Noah Obinna",
      avatar: "/testimonial-avatar-5.png"
    },
    {
      text: "I didn't think chat could bring real customers. Now, I can't imagine business without it.",
      name: "Kevin Hart",
      avatar: "/testimonial-avatar-6.png"
    }
  ];

  return (
    <section className="relative bg-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] overflow-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        {/* Heading */}
        <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.375rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.75rem] xl:leading-[4rem] text-center text-[#00212A] mb-[2.5rem] sm:mb-[3rem] md:mb-[3.5rem] lg:mb-[4rem]">
          What early <span className="text-[#0096FF]">users are</span> saying
        </h2>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem] mb-[3rem] lg:mb-[4rem]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel - Hidden on desktop */}
        <div className="lg:hidden mb-[2rem]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-[1rem]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-[1rem] mt-[2rem]">
            <button
              onClick={scrollPrev}
              className="w-[3rem] h-[3rem] rounded-full border-[0.125rem] border-[#0096FF] bg-[#00212A] flex items-center justify-center hover:bg-[#0096FF] transition-colors"
              aria-label="Previous testimonial"
            >
              <img src="/arrow-left-icon.svg" alt="" className="w-[0.75rem] h-[0.75rem]" />
            </button>
            <button
              onClick={scrollNext}
              className="w-[3rem] h-[3rem] rounded-full border-[0.125rem] border-[#0096FF] bg-[#00212A] flex items-center justify-center hover:bg-[#0096FF] transition-colors"
              aria-label="Next testimonial"
            >
              <img src="/arrow-right-icon.svg" alt="" className="w-[0.75rem] h-[0.75rem]" />
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-normal leading-[1.5] lg:leading-[2.625rem] text-center text-[#00212A] max-w-[45rem] mx-auto">
          Join our growing community across Nigeria, Ghana, Kenya and beyond.
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full h-auto lg:h-[14.3125rem] rounded-[2rem] border border-[#F7F5F5] p-[1.5rem] bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FE] shadow-[0_0.25rem_0.75rem_rgba(20,27,52,0.04)] flex flex-col gap-[1.25rem]">
      {/* Testimonial Text */}
      <p className="text-[0.875rem] lg:text-[1.125rem] font-normal leading-[1.5] lg:leading-[1.95rem] text-[#0E0C24]">
        {testimonial.text}
      </p>

      {/* Divider */}
      <div className="w-full h-[0.0625rem] bg-[#0E0C24] opacity-10"></div>

      {/* User Info */}
      <div className="flex items-center gap-[1rem]">
        {/* Avatar Container */}
        <div className="w-[4.875rem] h-[4.875rem] rounded-full p-[0.25rem] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(243,243,243,0.1)] shadow-[0_0.25rem_0.5rem_rgba(20,27,52,0.08)]">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-[4.375rem] h-[4.375rem] rounded-full object-cover"
          />
        </div>

        {/* Name and Stars */}
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="text-[1.25rem] font-bold leading-[1] text-[#0E0C24]">
            {testimonial.name}
          </h3>
          
          {/* Stars */}
          <div className="flex gap-[0.25rem]">
            {[1, 2, 3, 4, 5].map((star) => (
              <div 
                key={star}
                className="w-[1.75rem] h-[1.75rem] rounded-full p-[0.25rem] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(243,243,243,0.1)] flex items-center justify-center"
              >
                <img 
                  src="/star-icon.svg" 
                  alt=""
                  className="w-[1.25rem] h-[1.25rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}