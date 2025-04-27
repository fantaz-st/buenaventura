import Image from "next/image";
import AboutUs from "./HomeSections/AboutUs/AboutUs";
import Hero from "./HomeSections/Hero/Hero";
import Tours from "./HomeSections/Tours/Tours";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";

import classes from "./page.module.css";
import HomeFAQ from "./HomeSections/HomeFAQ/HomeFAQ";
import Testimonials from "./HomeSections/Testimonials/Testimonials";
import BoatSection from "./HomeSections/BoatSection/BoatSection";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
        <div className={classes.largeBg}>
          <AboutUs />
          <BoatSection />
          <Tours />
          <section className={classes.largeImage}>
            <Image src={"/assets/tall-bg.png"} alt='Tall background' fill style={{ objectFit: "contain" }} className={classes.tallBg} priority />
          </section>
        </div>
        <HomeFAQ />
        <Testimonials />
        <WhatsAppButton />
      </main>
    </div>
  );
}
