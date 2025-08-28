"use client";

import classes from "./page.module.css";
import Image from "next/image";
import Hero from "./sections/Hero/Hero";
import Description from "./sections/Description/Description";
import Itinerary from "./sections/Itinerary/Itinerary";
import Gallery from "./sections/Gallery/Gallery";
import LagoonFAQ from "./sections/LagoonFAQ/LagoonFAQ";

export default function ThreeIslandsTour() {
  return (
    <main>
      <section className={classes.hero}>
        <div className={classes.imageContainer}>
          <Image src="/assets/images/tours/lagoon/krknjasi-1.jpeg" alt="Rebelde boats - Felix 37 - Buenaventura" fill className={classes.image} priority sizes="100vw" />
        </div>
        <div className={classes.spacer}></div>
      </section>
      <div className={classes.container}>
        <Hero />
        <Description />
        <Itinerary />
        <Gallery />
        <LagoonFAQ />
      </div>
    </main>
  );
}
