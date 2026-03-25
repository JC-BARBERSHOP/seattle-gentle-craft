import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FirstVisitSection from "@/components/FirstVisitSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";

import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FirstVisitSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <GallerySection />
        
        <LocationSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
