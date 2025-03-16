"use client";
import gsap from "gsap";
import classes from "./MoreThanTour.module.css";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MoreThanTour = () => {
  const containerRef = useRef(null);
  const scrollTextRef = useRef(null);
  const rotatedTextRef = useRef(null);

  useGSAP(
    () => {
      const text = new SplitType(scrollTextRef.current, { types: "words, chars" });
      gsap.set(rotatedTextRef.current, { clipPath: "inset(0% 100% 0% 0%)" });

      gsap.fromTo(
        text.chars,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: scrollTextRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );

      gsap.to(rotatedTextRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rotatedTextRef.current,
          start: "top center",
          // start: "center center",
          end: "center 40%",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.text}>
        <h1 ref={scrollTextRef}>
          more than a tour
          <br />a luxury experience with
          <br />
          <br />
          premium comfort, and
          <br /> unbeatable value
        </h1>
        <h1 ref={rotatedTextRef} className={classes.rotated}>
          exclusive routes
        </h1>
      </div>
    </div>
  );
};

export default MoreThanTour;
