import BoatFAQ from "@/BoatSections/BoatFAQ/BoatFAQ";
import BoatHero from "@/BoatSections/BoatHero/BoatHero";
import BoatFeatures from "@/BoatSections/BoatFeatures/BoatFeatures";
import BoatSpecs from "@/BoatSections/BoatSpecs/BoatSpecs";
import LargeImage from "@/BoatSections/LargeImage/LargeImage";
import GallerySection from "@/Components/GallerySection/GallerySection";

export default function TheBoatPage() {
  return (
    <main>
      <BoatHero />
      <BoatFeatures />
      <GallerySection title="Designed to Be Desired" subTitle="When the journey is this beautiful, you've already arrived." />
      <BoatSpecs />
      <LargeImage />
      <BoatFAQ />
    </main>
  );
}
