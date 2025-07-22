import Image from "next/image";
import AboutUs from "../HomeSections/AboutUs/AboutUs";
import Hero from "../HomeSections/Hero/Hero";

import classes from "./page.module.css";
import BoatSection from "../HomeSections/BoatSection/BoatSection";
import Tours from "../HomeSections/Tours/Tours";
import HomeFAQ from "../HomeSections/HomeFAQ/HomeFAQ";
import Testimonials from "../HomeSections/Testimonials/Testimonials";
import MiniContact from "@/HomeSections/MiniContact/MiniContact";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
        <AboutUs />
        <BoatSection />
        <div className={classes.gradient}>
          <Tours />
          <section className={classes.largeImage}>
            <Image src={"/assets/tall-bg.png"} alt="Tall background" fill className={classes.image} loading="lazy" />
          </section>
        </div>
        <HomeFAQ />
        <Testimonials />
        <MiniContact />
      </main>
    </div>
  );
}
