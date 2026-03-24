import HeroSection from "@/components/sections/HeroSection";
import EventsSection from "@/components/sections/EventsSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import RSVPSection from "@/components/sections/RSVPSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventsSection />
      <LocationSection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
