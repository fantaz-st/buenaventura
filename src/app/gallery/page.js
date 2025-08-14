"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import boatImages from "@/settings/boatImages";
import classes from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Ensure ScrollTrigger stays in sync if ReactLenis in layout calls ScrollTrigger.update on scroll.
    // If not already wired in layout, you could manually call ScrollTrigger.update here on a RAF loop,
    // but per your layout it should be fine.

    slideRefs.current.forEach((slide) => {
      if (!slide) return;

      const img = slide.querySelector("img");
      const title = slide.querySelector(`.${classes.title}`);
      const subtitle = slide.querySelector(`.${classes.subtitle}`);

      // Vertical parallax: image moves from -10% to +10% as its slide passes through viewport
      gsap.fromTo(
        img,
        { yPercent: -30 },
        {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Title & subtitle reveal when centered
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(
        title,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        0
      ).to(
        subtitle,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className={classes.container} ref={containerRef}>
      {boatImages.map((slide, idx) => (
        <section className={classes.slide} key={slide.id} ref={(el) => (slideRefs.current[idx] = el)}>
          <div className={classes.imageWrapper}>
            <img src={slide.src} alt={slide.alt} aria-label={slide.alt} />
            <div className={classes.darkOverlay} />
          </div>
          <div className={classes.overlay}>
            <h1 className={classes.title}>{slide.title}</h1>
            <p className={classes.subtitle}>{slide.subTitle}</p>
          </div>
        </section>
      ))}
    </main>
  );
}
