import React from "react";

const ImageGrid = () => {
  return (
    <div>
      {/* Image Grid/Collage */}
      <div className="grid grid-cols-3 grid-rows-4 gap-[0.75rem] lg:gap-[1rem] h-full">
        {/* Top-left image */}
        <div className="col-span-1 row-span-2">
          <img
            src="/cta-user-1.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>

        {/* Top-center image (tall) */}
        <div className="col-span-1 row-span-2 row-start-1">
          <img
            src="/cta-user-2.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>

        {/* Top-right image */}
        <div className="col-span-1 row-span-2 row-start-1">
          <img
            src="/cta-user-3.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>

        {/* Middle-left image */}
        <div className="col-span-1 row-span-1 row-start-3">
          <img
            src="/cta-user-4.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>

        {/* Middle-center image */}
        <div className="col-span-1 row-span-2 row-start-3">
          <img
            src="/cta-user-5.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>

        {/* Middle-right image */}
        <div className="col-span-1 row-span-1 row-start-3">
          <img
            src="/cta-user-6.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>

        {/* Bottom-left image (wide) */}
        <div className="col-span-1 row-span-1 row-start-4">
          <img
            src="/cta-user-7.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>

        {/* Bottom-right image */}
        <div className="col-span-1 row-span-1 row-start-4 col-start-3">
          <img
            src="/cta-user-8.png"
            alt="SmashChat user"
            className="w-full h-full object-cover rounded-[1rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
