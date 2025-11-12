import React from 'react'

const DownloadAppButton = () => {
  return (
    <>
    
            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-[0.5rem] bg-[#0096FF] text-white font-bold px-[2rem] py-[1rem] rounded-[1.25rem] hover:bg-[#0085e6] transition-colors text-[1rem] leading-[1.5rem] whitespace-nowrap shadow-sm"
              >
                <img
                  src="/download-icon.svg"
                  alt="download icon"
                  className="w-[1rem] h-[1rem]"
                />
                Download App
              </a>
            </div>
    </>
  )
}

export default DownloadAppButton