import React from "react";
import HeroSection from "./component/HeroSection.jsx";
import WhySmashChatSection from "./component/WhySmashChatSection.jsx";
import MarketplaceSpotlightSection from "./component/MarketplaceSpotlightSection.jsx";
import TestimonialsSection from "./component/TestimonialsSection.jsx";

const App = () => {
  return (
    <div>
      <HeroSection />
      <WhySmashChatSection />
      <MarketplaceSpotlightSection />
      <TestimonialsSection />
    </div>
  );
};

export default App;
