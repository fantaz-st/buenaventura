"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { SplitText, CustomEase, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import classes from "./Hero.module.css";

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const copyRef = useRef(null);

  const [introDone, setIntroDone] = useState(false);
  const splitTitle = useRef(null);
  const splitSub = useRef(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      const loader = loaderRef.current;
      const copy = copyRef.current;
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      if (!video || !loader || !copy || !title || !subtitle) return;

      const onReady = () => {
        video.classList.add(classes.videoVisible);

        CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

        splitTitle.current = new SplitText(title, { type: "chars" });

        splitTitle.current.chars.forEach((c, i) => {
          const w = document.createElement("div");
          w.style.display = "inline-block";
          w.dataset.speed = `clamp(${(1.4 - i * 0.03).toFixed(2)})`;
          c.parentNode.replaceChild(w, c);
          w.appendChild(c);
        });

        splitSub.current = new SplitText(subtitle, {
          type: "lines",
          linesClass: "line",
        });

        gsap.set(copy, { autoAlpha: 1 });
        gsap.set(splitTitle.current.chars, { y: 120, opacity: 0 });
        gsap.set(splitSub.current.lines, { yPercent: 100, opacity: 0 });

        gsap
          .timeline({ onComplete: () => setIntroDone(true) })
          .to(loader, { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "hop" })
          /* changed .from → .to */
          .to(
            splitTitle.current.chars,
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.1,
              ease: "back.out(1.4)",
              duration: 0.6,
            },
            "-=0.6"
          )
          .to(
            splitSub.current.lines,
            {
              yPercent: 0,
              autoAlpha: 1,
              stagger: 0.15,
              ease: "power4.out",
              duration: 0.6,
            },
            "-=0.3"
          );
      };

      video.addEventListener("canplaythrough", onReady, { once: true });
      video.load();

      return () => {
        video.removeEventListener("canplaythrough", onReady);
        splitTitle.current?.revert();
        splitSub.current?.revert();
      };
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (!introDone || !splitTitle.current) return;

    gsap.to(splitTitle.current.chars, {
      y: -200,
      ease: "none",
      stagger: 0.04,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [introDone]);

  return (
    <section ref={containerRef} className={classes.container} id="hero">
      {!introDone && (
        <div ref={loaderRef} className={classes.loader}>
          <p className={classes.loadingText}>Loading…</p>
        </div>
      )}

      <video ref={videoRef} className={classes.video} playsInline muted loop autoPlay preload="auto" fetchPriority="high" poster="/video-poster.webp">
        <source src="/hero-rebelde-boats-felix-37.mp4" type="video/mp4" />
      </video>

      <div ref={copyRef} className={classes.copy}>
        <h1 ref={titleRef} className={classes.title}>
          Rebelde boats
        </h1>
      </div>

      <div className={classes.subtitle}>
        <h2 ref={subtitleRef}>Your Private Escape on the Adriatic – Luxury Boat Tours from Split to Hvar, Vis&nbsp;&amp;&nbsp;Beyond</h2>
      </div>
    </section>
  );
}
