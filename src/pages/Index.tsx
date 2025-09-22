import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import VisagismSection from "@/components/VisagismSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";

import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceCards />
      <AboutSection />
      <VisagismSection />
      <ProcessSection />
      <BenefitsSection />
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
