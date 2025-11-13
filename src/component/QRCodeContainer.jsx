import React from "react";

const QRCodeContainer = () => {
  return (
    <div className="relative bg-white shadow-lg">
      {/* Corner brackets - white, outside, straight angles */}
      <div className="absolute top-[-1.75rem] left-[-1.75rem] w-[2.5rem] h-[2.5rem] border-l-[3px] border-t-[3px] border-white"></div>
      <div className="absolute top-[-1.75rem] right-[-1.75rem] w-[2.5rem] h-[2.5rem] border-r-[3px] border-t-[3px] border-white"></div>
      <div className="absolute bottom-[-1.75rem] left-[-1.75rem] w-[2.5rem] h-[2.5rem] border-l-[3px] border-b-[3px] border-white"></div>
      <div className="absolute bottom-[-1.75rem] right-[-1.75rem] w-[2.5rem] h-[2.5rem] border-r-[3px] border-b-[3px] border-white"></div>

      <img
        src="/qr-code.png"
        alt="QR Code"
        className="w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] lg:w-[16rem] lg:h-[16rem] xl:w-[18rem] xl:h-[18rem]"
      />
    </div>
  );
};

export default QRCodeContainer;
