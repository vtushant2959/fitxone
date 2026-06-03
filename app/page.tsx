import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import PricingPreview from "@/components/home/PricingPreview";
import LeadForm from "@/components/home/LeadForm";
import ClassSchedule from "@/components/home/ClassSchedule";
import Trainers from "@/components/home/Trainers";
import GalleryPreview from "@/components/home/GalleryPreview";
import MarqueeBanner from "@/components/home/MarqueeBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <StatsBar />
      <Services />
      <WhyUs />
      <ClassSchedule />
      <Trainers />
      <PricingPreview />
      <GalleryPreview />
      <Testimonials />
      <LeadForm />
    </>
  );
}
