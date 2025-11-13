import FeatureSection from "../component/FeatureSection";
import HowItWorksHero from "../component/HowItWorksHero";
import SignupSection from "../component/SignupSection";
import SyncContactsSection from "../component/SyncContactsSection";
import CTASection from "../component/HomeCTASection";
import QRCodeContainer from "../component/QRCodeContainer";
import HowItWorksCTASection from "../component/HowItWorksCTASection";

const HowItWorksPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HowItWorksHero />
      {/* <SignupSection />
    <SyncContactsSection /> */}

      {/* Signup Section */}
      <FeatureSection
        heading="Sign up with your"
        headingHighlight="phone number" //blue span text
        description="Enter your number, verify it, and boom you're in. No email drama, no long forms. Just you and your contacts."
        imageLeft="/signup-phone-left.png"
        imageRight="/signup-phone-right.png"
        imageLeftAlt="SmashChat interface"
        imageRightAlt="Sign up interface"
        layout="images-left"
        showStars={true}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[8rem] xl:top-[8rem] 2xl:right-[40rem] 2xl:top-[16rem]"
        starsMobileRight="top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Sync Contacts Section */}
      <FeatureSection
        heading="Sync your"
        headingHighlight="contacts"
        description="SmashChat automatically connects you to your existing contacts, so you can start chatting right away. No 'add friend' stress."
        imageLeft="/sync-phone-left.png"
        imageRight="/sync-phone-right.png"
        imageLeftAlt="New Contact interface"
        imageRightAlt="All Contacts interface"
        layout="images-right"
        sectionPadding="lg:pt-[0rem] py-[7rem] sm:py-[4rem] md:py-[10rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* For Start-chatting Section */}
      <FeatureSection
        heading="Start"
        headingHighlight="chatting" //blue span text
        description="Text, voice, video whatever fits the moment. Smooth, fast, and fully encrypted."
        imageLeft="/chat-phone-left.png"
        imageRight="/chat-phone-right.png"
        imageLeftAlt="SmashChat interface"
        imageRightAlt="Sign up interface"
        layout="images-left"
        showStars={true}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[0rem] lg:right-[57rem] xl:top-[0rem] xl:right-[82rem] 2xl:top-[0rem] 2xl:right-[122rem]"
        starsMobileRight="hidden top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="hidden top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Buy-It Section */}
      <FeatureSection
        heading="See something you like? Buy it"
        headingHighlight="right inside the chat" //blue span text
        description="Friends and vendors can share products straight into your conversations. Tap to view details, hit Buy, pay instantly."
        imageLeft="/buyIt-phone-left.png"
        imageRight="/buyIt-phone-right.png"
        imageLeftAlt="Purchase interface"
        imageRightAlt="Purchase interface"
        layout="images-right"
        showStars={true}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[0rem] xl:top-[1rem] 2xl:right-[30rem] 2xl:top-[0rem]"
        starsMobileRight="hidden top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="hidden top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Get Your Order Section */}
      <FeatureSection
        heading="Get your order,"
        headingHighlight="keep chatting" //blue span text
        description="No switching apps, no confusion. You can track your order, confirm delivery, and message the seller all within the same chat."
        imageLeft="/order-phone-left.png"
        imageRight="/order-phone-right.png"
        imageLeftAlt="Purchase interface"
        imageRightAlt="Purchase interface"
        layout="images-left" //Determines the position of images
        showStars={false}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[0rem] xl:top-[1rem] 2xl:right-[30rem] 2xl:top-[0rem]"
        starsMobileRight="hidden top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="hidden top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Privacy Section */}
      <FeatureSection
        heading="We take privacy,"
        headingHighlight="seriously" //blue span text
        description="All your chats and transactions are encrypted end-to-end. Your data never leaves your device unless you send it."
        imageLeft="/privacy-phone-left.png"
        imageRight="/privacy-phone-right.png"
        imageLeftAlt="Privacy interface"
        imageRightAlt="Privacy interface"
        layout="images-right" //Determines the position of images
        showStars={true}
        starsDesktop="top-[1rem] right-[1rem] w-[6rem] h-[6rem] z-10 lg:top-[47rem] xl:right-[0rem] 2xl:right-[30rem]"
        starsMobileRight="hidden top-[10.5rem] right-[0rem] w-[4rem] h-[4rem] z-10 max-[424px]:w-[3rem] max-[424px]:h-[3rem] max-[424px]:top-[11rem]"
        starsMobileLeft="hidden top-[28.125rem] left-[-0.625rem] max-[424px]:w-[3rem] max-[424px]:h-[3rem] md:top-[42rem] md:right-[44rem] w-[4rem] h-[4rem] z-10"
        sectionPadding="py-[3rem] sm:py-[4rem] md:pb-[12rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem]"
      />

      {/* Call-to-action section */}
      <HowItWorksCTASection />
      
    </>
  );
};

export default HowItWorksPage;
