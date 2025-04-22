"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import testimonials from "@/app/settings/testimonials";
import TheButton from "../TheButton/TheButton";
import classes from "./Testimonials.module.css";
import Testimonial from "../Testimonial/Testimonial";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const heading = containerRef.current.querySelector(`.${classes.heading}`);
        gsap.to(heading, {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%", // when top of heading hits 80% down the viewport
            toggleActions: "play none none none",
          },
        });

        gsap.utils.toArray(`.${classes.testimonialWrap}`).forEach((card) => {
          gsap.from(card, {
            scale: 0.95,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <section className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        <h1 className={classes.heading}>Loved by those who believe adventure is mandatory.</h1>

        <div className={classes.testimonials}>
          {testimonials.map((t) => (
            <div key={t.id} className={classes.testimonialWrap}>
              <Testimonial t={t} />
            </div>
          ))}
        </div>

        <div className={classes.buttonWrap}>
          <TheButton variant='dark' href='https://www.tripadvisor.com/Attraction_Review-g295370-d28042808-Reviews-Rebelde_Boats-Split_Split_Dalmatia_County_Dalmatia.html'>
            Read more Testimonials
          </TheButton>
        </div>
      </div>
    </section>
  );
}
