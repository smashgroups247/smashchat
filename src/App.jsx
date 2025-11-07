import React from "react";
import HeroSection from "./component/HeroSection.jsx";
import WhySmashChatSection from "./component/WhySmashChatSection.jsx";
import MarketplaceSpotlightSection from "./component/MarketplaceSpotlightSection.jsx";
import TestimonialsSection from "./component/TestimonialsSection.jsx";
import CTASection from "./component/CTASection.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <div>
      <HeroSection />
      <WhySmashChatSection />
      <MarketplaceSpotlightSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
