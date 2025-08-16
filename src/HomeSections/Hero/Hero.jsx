"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText, CustomEase, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import styles from "./Hero.module.css";
import useFix100vh from "@/hooks/useFix100vh";

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const copyRef = useRef(null);
  const microRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useFix100vh();

  useGSAP(
    () => {
      const container = containerRef.current;
      const copy = copyRef.current;
      const titleEl = titleRef.current;
      const subtitleEl = subtitleRef.current;
      const microEl = microRef.current;
      const ctaEl = ctaRef.current;
      if (!container || !copy || !titleEl || !subtitleEl || !microEl || !ctaEl) return;

      CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

      gsap.set(copy, { autoAlpha: 1 });

      const splitTitle = new SplitText(titleEl, { type: "words,chars", wordsClass: "word", charsClass: "char" });
      gsap.set(splitTitle.words, { display: "inline-block", whiteSpace: "nowrap" });
      gsap.set(splitTitle.chars, { y: "100%", opacity: 0 });

      const splitSub = new SplitText(subtitleEl, { type: "lines", linesClass: "subline", mask: "lines" });
      gsap.set(splitSub.lines, { y: "100%", opacity: 0 });

      gsap.set(ctaEl, { autoAlpha: 0, y: 16, scale: 0.98 });

      gsap
        .timeline()
        .fromTo(microEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .to(splitTitle.chars, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: "power3.out" }, "-=0.3")
        .to(splitSub.lines, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4")
        .to(ctaEl, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }, "-=0.2");

      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(copy, { yPercent: 0 }, { yPercent: -10, ease: "none", scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: true } });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={styles.container} id="hero">
      <Image src="/assets/images/boat/rebelde boats felix 37 hero.png" alt="Felix 37 luxury speedboat cruising the Adriatic near Split, Croatia" fill priority sizes="100vw" className={styles.bg} />
      <div ref={copyRef} className={styles.copy}>
        <p ref={microRef} className={styles.micro}>
          Private • Luxury • Adriatic
        </p>
        <h1 ref={titleRef} className={styles.title}>
          Luxury Private Boat Tours from Split
        </h1>
        <h3 ref={subtitleRef} className={styles.subTitle}>
          Unhurried Adriatic escapes aboard Felix 37 — bespoke island-hopping day trips and private charters to Hvar, Vis, the Blue Cave & secluded bays.
        </h3>
        <a
          ref={ctaRef}
          href="#tours"
          className={styles.cta}
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#tours");
            if (!el) return;
            if (window.lenis && typeof window.lenis.scrollTo === "function") {
              window.lenis.scrollTo(el, { offset: 0, duration: 1.5 });
            } else {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Explore Our Tours
        </a>
      </div>
    </section>
  );
}
