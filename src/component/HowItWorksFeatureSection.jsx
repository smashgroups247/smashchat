import React from "react";
import StarsDecoration from "./StarsDecoration";

export default function HowItWorksFeatureSection({
  heading,
  headingHighlight,
  description,
  imageLeft,
  imageRight,
  imageLeftAlt = "App interface",
  imageRightAlt = "App interface",
  layout = "images-right", // "images-left" or "images-right"
  showStars = false,
  starsDesktop = null,
  starsMobileRight = null,
  starsMobileLeft = null,
  sectionPadding = "py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
}) {
  // Determine order classes based on layout
  const isImagesLeft = layout === "images-left";
  
  const imagesOrderClasses = isImagesLeft 
    ? "order-2 lg:order-1" 
    : "order-2";
  
  const contentOrderClasses = isImagesLeft 
    ? "order-1 lg:order-2" 
    : "order-1";
  
  const imagesJustifyClasses = isImagesLeft
    ? "justify-center lg:justify-start"
    : "justify-center lg:justify-end";

  return (
    <section className={`relative bg-white ${sectionPadding} overflow-hidden font-[Helvetica,Arial,sans-serif]`}>
      {/* Stars Decorations */}
      {showStars && starsDesktop && (
        <StarsDecoration className={`hidden lg:block absolute ${starsDesktop}`} />
      )}
      {showStars && starsMobileRight && (
        <StarsDecoration className={`block lg:hidden absolute ${starsMobileRight}`} />
      )}
      {showStars && starsMobileLeft && (
        <StarsDecoration className={`block lg:hidden absolute ${starsMobileLeft}`} />
      )}

      <div className="max-w-[90rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[6rem] relative z-10">
        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] items-center">
          {/* Phone Mockups */}
          <div className={`relative w-full flex ${imagesJustifyClasses} ${imagesOrderClasses}`}>
            <div className="relative w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[34.0625rem] h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[44.1875rem]">
              {/* Bottom-left phone (behind) */}
              <div className="absolute z-10 w-[60%] sm:w-[65%] lg:w-[17.875rem] top-[1.5rem] sm:top-[2rem] lg:top-[1.375rem] left-0 max-[424px]:left-[0.625rem]">
                <img
                  src={imageLeft}
                  alt={imageLeftAlt}
                  className="w-full h-auto"
                />
              </div>

              {/* Top-right phone (front) */}
              <div className="absolute z-20 w-[70%] sm:w-[75%] lg:w-[19.6875rem] top-0 right-[-1.5rem] sm:right-[0.5rem] md:right-[-5.5rem] lg:right-0 max-[424px]:right-[-0.5rem]">
                <img
                  src={imageRight}
                  alt={imageRightAlt}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`relative space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem] ${contentOrderClasses} w-full`}>
            {/* Heading */}
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.375rem] font-bold leading-[2.25rem] sm:leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.75rem] xl:leading-[4rem] text-center lg:text-left text-[#00212A]">
              {heading}{" "}
              <span className="text-[#0096FF]">{headingHighlight}</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[1.5] xl:leading-[2.625rem] text-center lg:text-left text-[#00212A] max-w-[35rem] lg:max-w-[40rem] mx-auto lg:mx-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}