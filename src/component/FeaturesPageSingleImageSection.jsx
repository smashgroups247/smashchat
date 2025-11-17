import React from "react";
import StarsDecoration from "./StarsDecoration";

export default function FeaturesPageSingleImageSection({
  heading,
  headingHighlight,
  features = [],
  footerText,
  image,
  imageAlt = "Feature illustration",
  layout = "images-right", // "images-left" or "images-right"
  showStars = false,
  starsDesktop = null,
  starsMobileRight = null,
  starsMobileLeft = null,
  sectionPadding = "py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
}) {
  // Determine order classes based on layout
  const isImagesLeft = layout === "images-left";
  
  const imageOrderClasses = isImagesLeft 
    ? "order-2 lg:order-1" 
    : "order-2";
  
  const contentOrderClasses = isImagesLeft 
    ? "order-1 lg:order-2" 
    : "order-1";
  
  const imageJustifyClasses = isImagesLeft
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
          {/* Single Image */}
          <div className={`relative w-full flex ${imageJustifyClasses} ${imageOrderClasses}`}>
            <div className="relative w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem]">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`relative space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2rem] ${contentOrderClasses} w-full`}>
            {/* Heading - 54px = 3.375rem, line-height: 64px = 4rem */}
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.375rem] font-bold leading-[2.4rem] sm:leading-[3rem] md:leading-[3.6rem] lg:leading-[4rem] text-center lg:text-left text-[#00212A]">
              {heading}{" "}
              <span className="text-[#0096FF]">{headingHighlight}</span>
            </h2>

            {/* Features List - font-size: 24px = 1.5rem, line-height: 36px = 2.25rem */}
            {features.length > 0 && (
              <div className="flex justify-center lg:justify-start">
                <ul className="space-y-[0.75rem] sm:space-y-[1rem] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal leading-[1.6rem] sm:leading-[1.8rem] md:leading-[2rem] lg:leading-[2.25rem] text-left text-[#00212A]">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#0096FF] mr-[0.5rem] sm:mr-[0.625rem] lg:mr-[0.75rem] flex-shrink-0 mt-[0.125rem]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer Text - font-size: 24px = 1.5rem, line-height: 36px = 2.25rem */}
            {footerText && (
              <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal leading-[1.6rem] sm:leading-[1.8rem] md:leading-[2rem] lg:leading-[2.25rem] text-center lg:text-left text-[#00212A] max-w-[35rem] lg:max-w-[40rem] mx-auto lg:mx-0">
                {footerText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}