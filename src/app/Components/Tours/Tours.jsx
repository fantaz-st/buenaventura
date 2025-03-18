"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import classes from "./Tours.module.css";

gsap.registerPlugin(ScrollTrigger);

const Tours = () => {
  const sectionRef = useRef(null);
  const scrollContentRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const scrollContent = scrollContentRef.current;
        const totalScroll = scrollContent.scrollWidth - window.innerWidth;

        gsap.to(scrollContent, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(scrollContentRef.current, { x: 0 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      const titles = document.querySelectorAll(`.${classes.text} h1:not(.${classes.rotated})`);
      titles.forEach((title) => {
        const split = new SplitType(title, { types: "chars" });

        gsap.fromTo(
          split.chars,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        `.${classes.rotated}`,
        { clipPath: "inset(0% 50% 0% 50%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: `.${classes.rotated}`,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className={classes.container}>
      <div ref={scrollContentRef} className={classes.scrollContent}>
        <div className={classes.text}>
          <h1>We organize four</h1>
          <h1 className={classes.rotated}>insane tours</h1>
          <h1>with unmatched value</h1>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <Image alt='Blue Lagoon and the Shipwreck tour photo' src='/assets/images/tours/lagoon.jpg' fill className={classes.image} />
            <h3>Blue Lagoon and the Shipwreck</h3>
          </div>
          <div className={classes.card}>
            <Image alt='Blue cave and Five Islands tour photo' src='/assets/images/tours/cave.jpg' fill className={classes.image} />
            <h3>Blue cave and Five Islands</h3>
          </div>
          <div className={classes.card}>
            <Image alt='Rebelde private luxurious bespoke boat tour photo' src='/assets/images/tours/private.jpg' fill className={classes.image} />
            <h3>Private bespoke tour</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
