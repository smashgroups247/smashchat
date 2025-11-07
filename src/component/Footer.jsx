import React from 'react';
import downloadIcon from '../assets/download-icon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white py-8 md:py-12 px-4 md:px-8 overflow-x-hidden font-[Helvetica,Arial,sans-serif]">
      <div className="max-w-[90rem] mx-auto w-full">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:gap-[18.375rem] md:gap-12 gap-8">
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
            <button className="flex items-center justify-center gap-2 w-full max-w-[15.5625rem] md:max-w-[11.75rem] h-[3.375rem] bg-[#0096FF] rounded-[1.25rem] px-6 py-4 hover:bg-[#0085e6] transition-colors">
              <img src={downloadIcon} alt="Download" className="w-5 h-5 flex-shrink-0" />
              <span className="text-[1rem] leading-normal font-bold text-white whitespace-nowrap">Download App</span>
            </button>
          </div>

          {/* Columns 2-4: Navigation Sections */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 md:gap-12 lg:gap-16 flex-1 w-full">
            {/* Column 2: Company */}
            <div className="flex flex-col gap-4 min-w-0">
              <h3 className="text-[1.25rem] leading-tight font-bold text-[#00212A]">Company</h3>
              <nav className="flex flex-col gap-3">
                <a href="#about" className="text-[1.125rem] leading-tight text-[#00212A] hover:text-[#0096FF] transition-colors">
                  About Us
                </a>
                <a href="#features" className="text-[1.125rem] leading-tight text-[#00212A] hover:text-[#0096FF] transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-[1.125rem] leading-tight text-[#00212A] hover:text-[#0096FF] transition-colors">
                  How It Works
                </a>
              </nav>
            </div>

            {/* Column 3: Get SmashChat */}
            <div className="flex flex-col gap-4 min-w-0">
              <h3 className="text-[1.25rem] leading-tight font-bold text-[#00212A]">Get SmashChat</h3>
              <nav className="flex flex-col gap-3">
                <a href="#windows" className="text-[1.125rem] leading-tight text-[#00212A] hover:text-[#0096FF] transition-colors">
                  Windows
                </a>
                <a href="#mac" className="text-[1.125rem] leading-tight text-[#00212A] hover:text-[#0096FF] transition-colors">
                  Mac
                </a>
                <a href="#android" className="text-[1.125rem] leading-tight text-[#00212A] hover:text-[#0096FF] transition-colors">
                  Android
                </a>
              </nav>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-4 min-w-0">
              <h3 className="text-[1.25rem] leading-tight font-bold text-[#00212A]">Contact</h3>
              <a href="mailto:smashchat@gmail.com" className="text-[1.125rem] leading-tight text-[#00212A] hover:text-[#0096FF] transition-colors break-words">
                smashchat@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="my-8 border-t border-[#171717] opacity-10" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
          <p className="text-[1.125rem] leading-tight text-[#00212A] opacity-80">
            © {currentYear} SmashChat. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a href="#privacy" className="text-[1.125rem] leading-tight text-[#00212A] opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[1.125rem] leading-tight text-[#00212A] opacity-80 hover:opacity-100 transition-opacity">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;