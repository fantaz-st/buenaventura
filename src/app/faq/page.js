import AnimatedText from "@/Components/AnimatedText/AnimatedText";
import classes from "./page.module.css";
import BoatHero from "@/BoatSections/BoatHero/BoatHero";
import AllFAQs from "@/Components/AllFAQs/AllFAQs";

export default function FAQPage() {
  return (
    <main>
      <BoatHero />
      {/* header */}
      <div className={classes.container}>
        <div className={classes.header}>
          <AnimatedText>
            <h2>Frequently Asked Questions</h2>
          </AnimatedText>
          <AnimatedText>
            <p>Dive into the details.</p>
          </AnimatedText>
        </div>
        <AllFAQs />
      </div>
    </main>
  );
}
