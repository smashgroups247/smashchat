import React from "react";

export default function BecomeAVendorButton() {
  return (
    <div className="w-full lg:w-auto flex justify-center">
      <a
        href="#"
        className="flex items-center justify-center gap-[0.5rem] bg-[#0096FF] text-white font-bold rounded-[1rem] hover:bg-[#0085e6] transition-colors text-[1rem] leading-[1.5rem] whitespace-nowrap shadow-sm w-full lg:w-auto px-[1rem] py-[0.75rem]"
        style={{
          paddingTop: '0.75rem',
          paddingRight: '1rem',
          paddingBottom: '0.75rem',
          paddingLeft: '1rem'
        }}
      >
        <img
          src="/download-vendor-icon..svg"
          alt="download icon"
          className="w-[1rem] h-[1rem]"
        />
        Become a Vendor
      </a>
    </div>
  );
}