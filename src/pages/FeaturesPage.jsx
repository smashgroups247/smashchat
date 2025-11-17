import FeaturesHero from "../component/FeaturesHero";
import FeaturesPageFeatureSection from "../component/FeaturesPageFeatureSection";
import FeaturesPageSingleImageSection from "../component/FeaturesPageSingleImageSection";
const FeaturesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <FeaturesHero />

      {/* Messaging Section */}
      <FeaturesPageFeatureSection
        heading="Messaging that"
        headingHighlight="feels effortless"
        features={[
          "Text, voice, and high-quality video calls",
          "Send photos, links, voice notes, anything",
          "Quick-sync across devices",
        ]}
        footerText="Stay connected with the people who matter. No stress"
        imageLeft="/message-phone-left.png"
        imageRight="message-phone-right.png"
        imageLeftAlt="SmashChat interface"
        imageRightAlt="Video call interface"
        layout="images-left"
        showStars={false}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem] 2xl:right-[40rem] 2xl:top-[16rem]"
        starsMobileRight="top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Marketplace Section */}
      <FeaturesPageFeatureSection
        heading="Marketplace built"
        headingHighlight="into your chats"
        features={[
          "Discover products from your contacts",
          "Sponsored vendor shops when you want more options",
          "Add-to-chat product sharing",
        ]}
        footerText="See a product card right inside your chat. Tap it. Check details. Pay. Done. No app switching."
        imageLeft="/featuresMarketplace-phone-left.png"
        imageRight="featuresMarketplace-phone-right.png"
        imageLeftAlt="SmashChat interface"
        imageRightAlt="Video call interface"
        layout="images-right"
        showStars={false}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem] 2xl:right-[40rem] 2xl:top-[16rem]"
        starsMobileRight="top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Payments Section */}
      <FeaturesPageFeatureSection
        heading="Secure payments for"
        headingHighlight="real-world trade"
        features={[
          "Fast local payments and transfers",
          "Encrypted transaction data",
          "Trusted buyer-seller verification",
        ]}
        footerText="Your money. Your privacy. Always protected."
        imageLeft="/payment-phone-left.png"
        imageRight="payment-phone-right.png"
        imageLeftAlt="SmashChat interface"
        imageRightAlt="Video call interface"
        layout="images-left"
        showStars={false}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem] 2xl:right-[40rem] 2xl:top-[16rem]"
        starsMobileRight="top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Designed for Africa Section */}
      <FeaturesPageSingleImageSection
        heading="Designed for"
        headingHighlight="Africa"
        features={[
          "Optimized for low data + patchy networks",
          "Local currencies and familiar payment methods",
          "Tools that support small and growing businesses",
        ]}
        footerText="Community first. Commerce next. Always Africa at the center."
        image="/community.png"
        imageAlt="People using SmashChat in Africa"
        layout="images-right"
        showStars={false}
        starsDesktop="top-[1rem] left-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem]"
        starsMobileRight="top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Your World Section */}
      <FeaturesPageFeatureSection
        heading="Your world,"
        headingHighlight="your network"
        features={[
          "Contacts-based social graph",
          "Status updates and business profiles",
          "Trusted recommendations from familiar faces",
        ]}
        footerText="Opportunity lives in your contacts list."
        imageLeft="/yourWorld-phone-left.png"
        imageRight="yourWorld-phone-right.png"
        imageLeftAlt="SmashChat interface"
        imageRightAlt="Video call interface"
        layout="images-left"
        showStars={false}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem] 2xl:right-[40rem] 2xl:top-[16rem]"
        starsMobileRight="top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />
    </>
  );
};

export default FeaturesPage;
