import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TrustSection from "@/components/home/TrustSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TrustedHelp Nigeria - Verified Domestic Staff Agency | Maids, Cooks, Drivers</title>
        <meta 
          name="description" 
          content="Nigeria's trusted agency for verified domestic staff. Get background-checked housemaids, cooks, drivers, nannies & caregivers with replacement guarantee. Serving Lagos, Abuja, Port Harcourt." 
        />
        <meta name="keywords" content="domestic staff Nigeria, housemaid Lagos, cook Abuja, driver Nigeria, nanny Nigeria, caregiver, verified domestic workers" />
        <link rel="canonical" href="https://trustedhelp.ng" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <TrustSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
