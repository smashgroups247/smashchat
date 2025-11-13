import React from "react";

const ImageGrid = () => {
  return (
    <div className="w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[28rem] mx-auto lg:mx-0">
      {/* Image Grid/Collage */}
      <div className="grid grid-cols-3 gap-[0.5rem] lg:gap-[0.625rem]">
        {/* Top-left image */}
        <div className="aspect-[3/4]">
          <img
            src="/cta-user-1.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Top-center image (tall) */}
        <div className="aspect-[3/4]">
          <img
            src="/cta-user-2.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Top-right image */}
        <div className="aspect-[3/4]">
          <img
            src="/cta-user-3.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Middle-left image */}
        <div className="aspect-square">
          <img
            src="/cta-user-4.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Middle-center image (tall) */}
        <div className="aspect-[3/4]">
          <img
            src="/cta-user-5.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Middle-right image */}
        <div className="aspect-square">
          <img
            src="/cta-user-6.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Bottom-left image */}
        <div className="aspect-square">
          <img
            src="/cta-user-7.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Bottom-center image */}
        <div className="aspect-square">
          <img
            src="/cta-user-3.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>

        {/* Bottom-right image */}
        <div className="aspect-square">
          <img
            src="/cta-user-8.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[0.75rem] lg:rounded-[1rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;