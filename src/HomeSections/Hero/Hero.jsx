"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase, SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import classes from "./Hero.module.css";
// import CoverButton from "@/Components/CoverButton/CoverButton";

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const innerRef = useRef(null); // ← NEW
  const mmRef = useRef(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const video = videoRef.current;
      const inner = innerRef.current; // ← NEW
      const loader = loaderRef.current;
      if (!video || !loader || !inner) return;

      const onReady = () => {
        /* ------------ Intro animation (unchanged) ------------ */
        video.classList.add(classes.videoVisible);
        CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

        gsap.set(inner, { autoAlpha: 1 });

        const splitTitle = new SplitText(`.${classes.title}`, { type: "lines", mask: "lines", linesClass: "line++" });
        const splitSubtitle = new SplitText(`.${classes.description}`, { type: "lines", mask: "lines", linesClass: "line++" });
        gsap.set([splitTitle.lines, splitSubtitle.lines], { y: "100%" });

        gsap
          .timeline({ onComplete: () => setGone(true) })
          .to(loader, { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "hop" })
          .to(splitTitle.lines, { y: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, "-=0.6")
          .to(splitSubtitle.lines, { y: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, "-=0.6");

        /* ------------  Parallax (video + inner)  ------------ */
        const mm = gsap.matchMedia(containerRef.current);
        mmRef.current = mm;

        // generic helper so we can parallax any element/shift pair
        const parallax = (el, shift) =>
          gsap.fromTo(
            el,
            { yPercent: -shift },
            {
              yPercent: shift,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            }
          );

        // Desktop
        mm.add("(min-width: 769px)", () => {
          parallax(video, 12); // original speed
          parallax(inner, -24); // faster (2×)
        });

        // Mobile / tablets
        mm.add("(max-width: 768px)", () => {
          parallax(video, 4);
          parallax(inner, -8);
        });

        // Motion-reduction fallback
        mm.add("(prefers-reduced-motion: reduce)", () => ScrollTrigger.killAll());

        ScrollTrigger.refresh();
        return () => mm.revert();
      };

      video.addEventListener("canplaythrough", onReady, { once: true });
      video.load();

      return () => {
        video.removeEventListener("canplaythrough", onReady);
        mmRef.current?.revert();
      };
    },
    { scope: containerRef }
  );

  /* ---------------- JSX ---------------- */
  return (
    <section ref={containerRef} className={classes.container} id="hero">
      {!gone && (
        <div ref={loaderRef} className={classes.loader}>
          <p className={classes.loadingText}>Loading…</p>
        </div>
      )}

      <video ref={videoRef} className={classes.video} playsInline muted loop autoPlay preload="auto" fetchPriority="high" poster="/video-poster.webp">
        <source src="felix37.mp4" type="video/mp4" />
      </video>

      {/* COPY + CTA (now has a ref) */}
      <div ref={innerRef} className={classes.inner}>
        <h1 className={classes.title}>
          Private.
          <br />
          Premium.
          <br />
          Unforgettable.
        </h1>

        <div className={classes.rest}>
          <p className={classes.description}>Step onto our Felix 37 speedboat for an exclusive and bespoke private boat trip from Split that blends prestige with adventure—crystal coves, five-island hopping, and Blue Cave magic all wrapped in effortless Mediterranean style.</p>
        </div>
      </div>
      {/* <CoverButton /> */}
    </section>
  );
}
