import BecomeAVendorFeatureSection from "../component/BecomeAVendorFeatureSection";
import BecomeAVendorHero from "../component/BecomeAVendorHero";

const BecomeAVendorPage = () => {
  return (
    <>
      {/* Hero Section */}
      <BecomeAVendorHero />

      {/* For Shop Section */}
      <BecomeAVendorFeatureSection
        heading="Set up your"
        headingHighlight="shop in minutes" //blue span text
        description="Sign up or switch your profile to a Business Account. Add your store name, logo, and short bio. That’s it your business page is live."
        descriptionSecondary="You don't need a website. Your customers are already on Smashchat."
        imageLeft="/shop-phone-left.png"
        imageRight="/shop-phone-right.png"
        imageLeftAlt="Setup shop interface"
        imageRightAlt="Setup shop interface"
        layout="images-left"
        showStars={true}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[22rem] lg:right-[2rem] xl:top-[22rem] xl:right-[2rem] 2xl:top-[22rem] 2xl:right-[35rem]"
        starsMobileRight="hidden top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:left-[2.4rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] lg:py-[6rem] xl:py-[8rem]"
      />

       {/* For Products Section */}
      <BecomeAVendorFeatureSection
        heading="Add products straight "
        headingHighlight="from your phone" //blue span text
        description="Upload photos, set your price, and drop a short description. Each product automatically becomes a shareable product card you can send inside any chat."
        descriptionSecondary="Show it. Share it. Sell it."
        imageLeft="/products-phone-left.png"
        imageRight="/products-phone-right.png"
        imageLeftAlt="products interface"
        imageRightAlt="products interface"
        layout="images-right"
        showStars={false}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[0rem] lg:right-[57rem] xl:top-[0rem] xl:right-[82rem] 2xl:top-[0rem] 2xl:right-[122rem]"
        starsMobileRight="hidden top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="hidden top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] lg:py-[6rem] xl:py-[8rem]"
      />

       {/* For Promotion Section */}
      <BecomeAVendorFeatureSection
        heading="Promote your products"
        headingHighlight="and reach new buyers" //blue span text
        description="Boost your products with sponsored placements they’ll appear in the Discover feed and inside chats where users look for similar items. Pay only for engagement, not empty views."
        descriptionSecondary="Let your products talk to the right people."
        imageLeft="/promote-phone-left.png"
        imageRight="/promote-phone-right.png"
        imageLeftAlt="Promote interface"
        imageRightAlt="Promote interface"
        layout="images-left"
        showStars={true}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[0rem] lg:right-[57rem] xl:top-[0rem] xl:right-[82rem] 2xl:top-[0rem] 2xl:right-[122rem]"
        starsMobileRight="hidden top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="hidden top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] lg:py-[6rem] xl:py-[8rem]"
      />

  
    </>
  );
};

export default BecomeAVendorPage;
