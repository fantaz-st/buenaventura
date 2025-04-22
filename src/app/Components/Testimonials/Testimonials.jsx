"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import testimonials from "@/app/settings/testimonials";
import Image from "next/image";
import TheButton from "../TheButton/TheButton";
import classes from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  // GSAP: animate heading and cards on scroll into view
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

        // Cards scale/fade
        gsap.utils.toArray(`.${classes.testimonial}`).forEach((card) => {
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
            <figure key={t.id} className={classes.testimonial} tabIndex={0} aria-label={`Testimonial by ${t.name}: ${t.title}`}>
              <Image src={t.image} alt={t.name} fill className={classes.image} />

              <figcaption className={classes.footer}>
                <div className={classes.footerOverlay} />

                <div className={classes.footerContent}>
                  <div className={classes.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={classes.star} width='16' height='16' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                      </svg>
                    ))}
                  </div>

                  <h2 className={classes.title}>{t.title}</h2>
                  <p className={classes.text}>{t.text}</p>
                  <p className={classes.name}>{t.name}</p>
                </div>
              </figcaption>
            </figure>
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
