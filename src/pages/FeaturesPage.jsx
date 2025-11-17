import FeaturesHero from "../component/FeaturesHero";
import FeaturesPageFeatureSection from "../component/FeaturesPageFeatureSection";
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
          "Quick-sync across devices"
        ]}
        footerText="Stay connected with the people who matter. No stress"
        imageLeft="/message-phone-left.png"
        imageRight="message-phone-right.png"
        imageLeftAlt="SmashChat interface"
        imageRightAlt="Video call interface"
        layout="images-left"
        showStars={true}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem] 2xl:right-[40rem] 2xl:top-[16rem]"
        starsMobileRight="top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />
    </>
  );
};

export default FeaturesPage;