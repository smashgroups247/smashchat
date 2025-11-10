import HeroSection from "../component/HeroSection";
import WhySmashChatSection from "../component/WhySmashChatSection";
import MarketplaceSpotlightSection from "../component/MarketplaceSpotlightSection";
import TestimonialsSection from "../component/TestimonialsSection";
import CTASection from "../component/CTASection";

const HomePage = () => {
  return (
    <div>
      {/* Hero section with main value proposition */}
      <HeroSection />
      
      {/* Why choose SmashChat section */}
      <WhySmashChatSection />
      
      {/* Marketplace spotlight section */}
      <MarketplaceSpotlightSection />
      
      {/* User testimonials section */}
      <TestimonialsSection />
      
      {/* Call-to-action section */}
      <CTASection />
    </div>
  );
};

export default HomePage;