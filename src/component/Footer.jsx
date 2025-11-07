import React from 'react';
import downloadIcon from '../assets/download-icon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:gap-[18.375rem] gap-8">
          {/* Column 1: Logo, Tagline, Download Button */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="SmashChat" className="w-[1.75rem] h-[1.75rem] sm:w-[2rem] sm:h-[2rem]" />
              <span className="text-[1.5rem] font-bold text-[#00212A] leading-tight">SmashChat</span>
            </div>

            {/* Tagline */}
            <p className="text-[1.125rem] leading-tight text-[#00212AB8] max-w-[15.625rem]">
              Connect, chat, and shop with your contacts, all in one place.
            </p>

            {/* Download Button */}
            <button className="flex items-center justify-center gap-2 w-[15.5625rem] md:w-[11.75rem] h-[3.375rem] bg-[#0096FF] rounded-[1.25rem] px-6 py-4">
              <img src={downloadIcon} alt="Download" className="w-5 h-5" />
              <span className="text-[1rem] leading-normal font-bold text-white whitespace-nowrap">Download App</span>
            </button>
          </div>

       
      </div>
    </footer>
  );
};

export default Footer;