"use client";

import AnimatedText from "@/Components/AnimatedText/AnimatedText";
import FAQ from "@/Components/FAQ/FAQ";
import TheButton from "@/Components/TheButton/TheButton";
import faqs from "@/settings/faqs";

import classes from "./page.module.css";
import Image from "next/image";

import { useRef, useState } from "react";
import Hero from "./sections/Hero/Hero";
import Description from "./sections/Description/Description";
import TourMap from "./sections/TourMap/TourMap";
import Itinerary from "./sections/Itinerary/Itinerary";

export default function ThreeIslandsTour() {
  const containerRef = useRef(null);

  return (
    <main>
      <section className={classes.hero}>
        <div className={classes.imageContainer}>
          <Image src="/assets/images/tours/lagoon/krknjasi-1.jpeg" alt="Rebelde boats - Felix 37 - Buenaventura" fill className={classes.image} priority sizes="100vw" />
        </div>
        <div className={classes.spacer}></div>
      </section>
      <div className={classes.container} ref={containerRef}>
        <section className={classes.content}>
          <Hero />
          <Description />
          <Itinerary />
          <TourMap />
          {/* <div className={classes.description}></div>
          <div className={classes.features}></div>
          <div className={classes.media}></div>
          <div className={classes.route}></div>
          <div className={classes.faq}>
            <div className={classes.faqHeader}>
              <AnimatedText>
                <h2 className={classes.faqTitle}>Before You Set Sail.</h2>
              </AnimatedText>
              <AnimatedText delay={0.35}>
                <p className={classes.faqSubTitle}>Wondering what to pack? When to arrive? What&apos;s included? We&apos;re here to keep it simple — because your only job should be to enjoy the ride.</p>
              </AnimatedText>
            </div>
            <FAQ faqs={faqs[2].qa} />
            <p>Find answers to all your questions about the tours, the boat, pricing, what&apos;s included, the meeting point, and more on our dedicated FAQ page.</p>
            <div className={classes.buttonWrap}>
              <TheButton variant="dark">Read more FAQs</TheButton>
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
