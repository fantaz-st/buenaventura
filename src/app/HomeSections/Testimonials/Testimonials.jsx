"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import testimonials from "@/app/settings/testimonials";
import TheButton from "../../Components/TheButton/TheButton";
import classes from "./Testimonials.module.css";
import TestimonialCard from "../../Components/Cards/TestimonialCard/TestimonialCard";
import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(`.${classes.testimonialWrap}`, containerRef.current).forEach((card) => {
        card.style.overflow = "hidden";
        const img = card.querySelector(".cardImg");
        const R = 20;

        const tl = gsap
          .timeline({ paused: true })
          .fromTo(card, { clipPath: `inset(20% 20% 20% 20% round ${R}px)`, scale: 1.2 }, { clipPath: `inset(0% 0% 0% 0%   round ${R}px)`, scale: 1, duration: 1.2, ease: "power2.out" }, 0)
          .fromTo(img, { scale: 1.3, transformOrigin: "center" }, { scale: 1, duration: 1.2, ease: "power3.out" }, 0);

        ScrollTrigger.create({
          trigger: card,
          start: "top 70%",
          animation: tl,
          // toggleActions: "restart reverse restart reverse",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        <SectionHeader title='Good Times Travel Far.' subTitle="When the journey is unforgettable, the stories last forever. Here's how our guests describe their time aboard Buenaventura: joyful, effortless, unforgettable." />

        <div className={classes.testimonials}>
          {testimonials.map((t) => (
            <div key={t.id} className={classes.testimonialWrap}>
              <TestimonialCard t={t} />
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
