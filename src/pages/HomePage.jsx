import HeroSection from "../component/HeroSection";
import WhySmashChatSection from "../component/WhySmashChatSection";
import MarketplaceSpotlightSection from "../component/MarketplaceSpotlightSection";
import TestimonialsSection from "../component/TestimonialsSection";
import CTASection from "../component/HomeCTASection";
import ImageGrid from "../component/ImageGrid";
import HomeCTASection from "../component/HomeCTASection";

const HomePage = () => {
  return (
    <>
      {/* Hero section with main value proposition */}
      <HeroSection />
      {/* Why choose SmashChat section */}
      <WhySmashChatSection />
      {/* Marketplace spotlight section */}
      <MarketplaceSpotlightSection />
      {/* User testimonials section */}
      <TestimonialsSection />
      {/* Call-to-action section */}
      <HomeCTASection />
    </>
  );
};

export default HomePage;
