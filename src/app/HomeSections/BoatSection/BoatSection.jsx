"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import classes from "./BoatSection.module.css";
import TheButton from "@/Components/TheButton/TheButton";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function BoatSection() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <section className={classes.section} ref={containerRef}>
      <div ref={imageWrapperRef} className={classes.imageWrapper}>
        <Image
          src="/assets/images/boat/about-the-boat.jpg"
          alt="Rebelde boats Buenaventura about the boat"
          sizes="(min-width: 2820px) 2538px, (min-width: 2580px) 2322px, (min-width: 2240px) 2016px, (min-width: 2060px) 1854px, (min-width: 1940px) 1746px, (min-width: 1100px) 990px, (min-width: 840px) 756px, (min-width: 760px) calc(30vw + 456px), (min-width: 660px) 594px, 270px"
          fill
          className={classes.image}
          priority
        />
      </div>

      <div ref={contentRef} className={classes.content}>
        <AnimatedText>
          <h2 className={classes.title}>Built for Good Living.</h2>
        </AnimatedText>
        <div className={classes.footer}>
          <AnimatedText>
            <p className={classes.subTitle}>Comfort you can sink into. Performance that carries you farther. Space designed for shared smiles, spontaneous dives, and long, slow lunches under the sun. Buenaventura isn&apos;t just a boat — it&apos;s your floating sanctuary.</p>
          </AnimatedText>
          <div>
            <TheButton variant="light" href="/our-boat">
              Explore the Boat
            </TheButton>
          </div>
        </div>
      </div>
    </section>
  );
}
