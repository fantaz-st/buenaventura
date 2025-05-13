"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase, SplitText } from "gsap/all";
import Image from "next/image";
import classes from "./ToursHero.module.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase, SplitText);

const ToursHero = () => {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const loader = loaderRef.current;

      CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

      gsap.set(`.${classes.inner}`, { autoAlpha: 1 });

      const split = new SplitText(`.${classes.title}`, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
        lineThreshold: 0.1,
      });

      const lines = split.lines;
      gsap.set(lines, { y: "100%" });

      gsap
        .timeline({ onComplete: () => setGone(true) })
        .to(loader, {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.2,
          ease: "hop",
        })
        .to(
          lines,
          {
            y: "0%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.6"
        )
        .from(`.${classes.rest}`, { y: 40, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.6");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={classes.container}>
      {!gone && (
        <div ref={loaderRef} className={classes.loader}>
          <p className={classes.loadingText}>Loading…</p>
        </div>
      )}

      <div className={classes.inner}>
        <h1 className={classes.title}>
          Hand-Picked Experiences,
          <br />
          One Click Away
        </h1>

        <div className={classes.rest}>
          <p className={classes.description}>Stress-Free Shore Excursions and Custom Itineraries Across the Adriatic.</p>
        </div>
      </div>

      <div className={classes.imageContainer}>
        <Image src='/assets/images/boat/boat2.jpg' alt='Rebelde boats - Felix 37 - Buenaventura' fill className={classes.image} priority sizes='100vw' />
      </div>
    </section>
  );
};

export default ToursHero;
