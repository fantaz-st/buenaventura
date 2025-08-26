"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MarqueePill from "@/Components/MarqueePill/MarqueePill";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";
import classes from "./AboutUs.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const root = useRef(null);

  useGSAP(
    () => {
      const cols = gsap.utils.toArray(`.${classes.col}`);
      gsap.set(cols, { y: 24, opacity: 0 });
      gsap.to(cols, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: `.${classes.columns}`,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className={classes.container} data-header="dark" ref={root}>
      <div className={classes.inner}>
        <div className={classes.pill}>
          <MarqueePill title="About us" />
        </div>

        <div className={classes.copy}>
          <AnimatedText animateOnScroll className={classes.title}>
            <h2>We create unforgettable moments at sea, where comfort meets ease and every mile feels personal.</h2>
          </AnimatedText>

          <div className={classes.columns}>
            <div className={classes.col}>
              <div className={classes.icon}>🌊</div>
              <h3>Our vision</h3>
              <p>To celebrate life on the Adriatic by crafting private journeys that feel effortless, intimate, and deeply memorable.</p>
            </div>
            <div className={classes.col}>
              <div className={classes.icon}>⚓</div>
              <h3>Our mission</h3>
              <p>To deliver premium service and a modern, comfortable boat—so you can relax, connect, and enjoy the day your way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
