"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import classes from "./AboutUs.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutUs = () => {
  const scrollContainerRef = useRef(null);
  const scrollTextRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(scrollTextRef.current, { type: "words,chars" });

      gsap.fromTo(
        split.chars,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: scrollTextRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    },
    { scope: scrollContainerRef }
  );

  return (
    <div className={classes.container} ref={scrollContainerRef} data-header='dark'>
      <div className={classes.inner}>
        <h2 ref={scrollTextRef}>
          We believe in living fully — feeling the salt in your hair, the sun on your face, and good company by your side.
          <br />
          We craft experiences where the sea is a companion, not a destination.
          <br />
          For laughter that carries over open water, and days you never want to end.
          <br />
          Every journey is personal.
          <br />
          Every wave, a new memory.
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
