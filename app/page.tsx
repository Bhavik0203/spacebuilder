import CurtainOverlay from "./components/curtain-overlay";
import Banner from "./components/banner";
import CorporateOverview from "./components/corporate-overview";
import ProjectsSection from "./components/projects-section";
import StatsSection from "./components/stats-section";
import PartnersSection from "./components/partners-section";
import TestimonialsSection from "./components/testimonials-section";
import ByLocationSection from "./components/by-location-section";
import GallerySection from "./components/gallery-section";
import BuildFamilySection from "./components/build-family-section";
import ScheduleVisitSection from "./components/schedule-visit-section";
import ProductStyle from "./components/product-style";
import PFactorSection from "./components/p-factor-section";

export default function Home() {
  return (
    <div>
      <CurtainOverlay />
      <Banner />
      <CorporateOverview />
       <StatsSection />
      
      <ProductStyle/>
      <PFactorSection/>
      <ProjectsSection />
     
      <ByLocationSection />
      <GallerySection />
      <BuildFamilySection />
      <ScheduleVisitSection />
      <PartnersSection />
        <TestimonialsSection />
    </div>
  );
}
