import BoatFAQ from "@/BoatSections/BoatFAQ/BoatFAQ";
import BoatHero from "@/BoatSections/BoatHero/BoatHero";
import BoatFeatures from "@/BoatSections/BoatSection/BoatFeatures";
import BoatSpecs from "@/BoatSections/BoatSpecs/BoatSpecs";

export default function TheBoatPage() {
  return (
    <main>
      <BoatHero />
      <BoatFeatures />
      <BoatSpecs />
      <BoatFAQ />
    </main>
  );
}
