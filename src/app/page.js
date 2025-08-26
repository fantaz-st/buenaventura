import AboutUs from "./HomeSections/AboutUs/AboutUs";
import Hero from "./HomeSections/Hero/Hero";

import classes from "./page.module.css";
import BoatSection from "./HomeSections/BoatSection/BoatSection";
import Tours from "./HomeSections/Tours/Tours";
import HomeFAQ from "./HomeSections/HomeFAQ/HomeFAQ";
import Testimonials from "./HomeSections/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
        <AboutUs />
        <BoatSection />
        <Tours />
        <Testimonials />
        <HomeFAQ />
      </main>
    </div>
  );
}
