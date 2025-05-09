import Tours from "@/HomeSections/Tours/Tours";
import ToursFaq from "@/OurToursSections/ToursFAQ/ToursFaq";
import ToursHero from "@/OurToursSections/ToursHero/ToursHero";

export default function OurToursPage() {
  return (
    <main>
      <ToursHero />
      <Tours />
      <ToursFaq />
    </main>
  );
}
