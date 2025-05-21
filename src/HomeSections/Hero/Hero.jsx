/* Hero.jsx */
"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText, CustomEase, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import classes from "./Hero.module.css";
import CoverButton from "@/Components/CoverButton/CoverButton";

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const copyRef = useRef(null);
  const [introDone, setIntroDone] = useState(false);

  /* ────────────────────────────────────────────────────────── */
  useGSAP(
    () => {
      const container = containerRef.current;
      const video = videoRef.current;
      const loader = loaderRef.current;
      const copy = copyRef.current;
      if (!video || !loader || !copy || !container) return;

      /* ─── Intro (fires when video is ready) ─── */
      const onReady = () => {
        video.classList.add(classes.videoVisible);

        CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

        /* make copy visible, then split title lines */
        gsap.set(copy, { autoAlpha: 1 });
        const splitTitle = new SplitText(`.${classes.title}`, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
        });
        gsap.set(splitTitle.lines, { y: "100%" });

        gsap
          .timeline({ onComplete: () => setIntroDone(true) })
          .to(loader, { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "hop" })
          .to(splitTitle.lines, { y: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, "-=0.6")
          .to(`.${classes.footer}`, { y: 0, duration: 1, ease: "power4.out" }, "-=0.6");
      };

      video.addEventListener("canplaythrough", onReady, { once: true });
      video.load();

      /* ─── Scroll-triggered effects (skip for reduced motion) ─── */
      const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReduced) {
        /* Title parallax */
        gsap.fromTo(
          copy,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        /* Container shrink + rounded corners */
        gsap.fromTo(
          container,
          { scale: 1, borderRadius: "0rem" },
          {
            scale: 0.9,
            borderRadius: "2rem",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      /* cleanup */
      return () => {
        video.removeEventListener("canplaythrough", onReady);
        /*  ScrollTrigger.killTweensOf(container);
        ScrollTrigger.killTweensOf(copy); */
      };
    },
    { scope: containerRef }
  );

  /* ────────────────────────────────────────────────────────── */
  return (
    <section ref={containerRef} className={classes.container} id="hero">
      {!introDone && (
        <div ref={loaderRef} className={classes.loader} aria-live="polite">
          <p className={classes.loadingText}>Loading…</p>
        </div>
      )}

      <video ref={videoRef} className={classes.video} playsInline muted loop autoPlay preload="auto" fetchPriority="high" poster="/video-poster.webp">
        <source src="/felix37.mp4" type="video/mp4" />
      </video>

      {/* no-script fallback for crawlers */}
      <noscript>
        <picture>
          <img src="/video-poster.webp" alt="Aerial view of Felix 37 speedboat cruising the Adriatic" className={classes.noscriptPoster} width="1920" height="1080" fetchPriority="high" />
        </picture>
      </noscript>

      {/* Title & mobile CTA */}
      <div ref={copyRef} className={classes.copy}>
        <h1 className={classes.title}>
          Private.
          <br />
          Premium.
          <br />
          Unforgettable.
        </h1>

        {/* phones / tablets */}
        <button className={classes.mobileCta}>
          <span className={classes.mobileLabel}>Discover&nbsp;full&nbsp;video</span>
          <span className={classes.mobilePlay}>
            <svg width="9" height="12" viewBox="0 0 9 12" aria-hidden="true">
              <path d="M7.916 6.277 0.85 10.988a.5.5 0 0 1-.518-.093A.452.452 0 0 1 .332 10.71V1.29A.334.334 0 0 1 .665.956c.063 0 .127.02.185.056l7.066 4.711a.334.334 0 0 1 0 .554Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      </div>

      {/* desktop footer */}
      <div className={classes.footer}>
        <p>Keep&nbsp;scrolling</p>
        <CoverButton />
      </div>
    </section>
  );
}
