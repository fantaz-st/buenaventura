import Image from "next/image";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hero from "./Components/Hero/Hero";
import Tours from "./Components/Tours/Tours";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";

import classes from "./page.module.css";
import HomeFAQ from "./Components/HomeFAQ/HomeFAQ";
import Testimonials from "./Components/Testimonials/Testimonials";
import BoatSection from "./Components/BoatSection/BoatSection";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
        <div className={classes.largeBg}>
          <AboutUs />
          <BoatSection />
          <Tours />
          <section style={{ height: "140vh", width: "auto", position: "relative" }}>
            <Image src={"/assets/tall-bg.png"} alt='Tall background' fill style={{ objectFit: "cover" }} className={classes.tallBg} priority />
          </section>
        </div>
        <HomeFAQ />
        <Testimonials />
        <WhatsAppButton />
      </main>
    </div>
  );
}
