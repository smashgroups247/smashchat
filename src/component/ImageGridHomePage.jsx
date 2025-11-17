const ImageGridHomePage = () => {
  return (
    <div className="w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[28rem] mx-auto lg:mx-0">
      {/* Mobile Image - Shows on small screens */}
      <img
        src="/cta-user-home-mobile.png"
        alt="SmashChat users collage"
        className="w-full h-auto block lg:hidden"
      />
      
      {/* Desktop Image - Shows on large screens */}
      <img
        src="/cta-user-home-desktop.png"
        alt="SmashChat users collage"
        className="w-full h-auto hidden lg:block"
      />
    </div>
  );
};

export default ImageGridHomePage;