"use client";

import gsap from "gsap";
import SplitType from "split-type";
import classes from "./AboutUs.module.css";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const scrollContainerRef = useRef(null);
  const scrollTextRef = useRef(null);

  useGSAP(
    () => {
      const text = new SplitType(scrollTextRef.current, { types: "words, chars" });

      gsap.fromTo(
        text.chars,
        {
          opacity: 0.3,
        },
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: scrollTextRef.current,
            /* start: "top 80%",
            end: "top 20%", */
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,
            markers: false,
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
          {/* At REBELDE Boats, */}We believe the sea brings people closer — to each other and to themselves.
          <br />
          Our tours are made for slowing down, being present, and sharing moments that stay with you.
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
