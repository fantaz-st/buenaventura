"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase, SplitText } from "gsap/all";
import TheButton from "../../Components/TheButton/TheButton";
import classes from "./Hero.module.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase);

export default function Hero() {
  const containerRef = useRef(null);
  const loaderRef = useRef(null); // black panel with “Loading…”
  const videoRef = useRef(null);
  const [gone, setGone] = useState(false); // removes loader after anim

  useGSAP(
    () => {
      const video = videoRef.current;
      const loader = loaderRef.current;
      if (!video || !loader) return;

      const onReady = () => {
        video.classList.add(classes.videoVisible);

        CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

        gsap.set(`.${classes.inner}`, { autoAlpha: 1 });

        const splitTitle = new SplitText(`.${classes.title}`, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.1,
        });
        const splitSubtitle = new SplitText(`.${classes.description}`, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.1,
        });

        gsap.set(splitTitle.lines, { y: "100%" });
        gsap.set(splitSubtitle.lines, { y: "100%" });

        gsap
          .timeline({
            onComplete: () => setGone(true),
          })
          .to(loader, {
            clipPath: "inset(100% 0 0 0)",
            duration: 1.2,
            ease: "hop",
          })
          .to(
            splitTitle.lines,
            {
              y: "0%",
              duration: 1,
              stagger: 0.1,
              ease: "power4.out",
            },
            "-=0.6"
          )
          .to(
            splitSubtitle.lines,
            {
              y: "0%",
              duration: 1,
              stagger: 0.1,
              ease: "power4.out",
            },
            "-=0.6"
          )
          .from(`.${classes.buttons}`, { y: 40, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.6");
      };

      video.addEventListener("canplaythrough", onReady, { once: true });
      video.load();

      return () => video.removeEventListener("canplaythrough", onReady);
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={classes.container} id='hero'>
      {/*  LOADING PANEL  */}
      {!gone && (
        <div ref={loaderRef} className={classes.loader}>
          <p className={classes.loadingText}>Loading…</p>
        </div>
      )}

      {/*  VIDEO  */}
      <video ref={videoRef} className={classes.video} playsInline muted loop autoPlay preload='auto' fetchPriority='high' poster='/video-poster.webp'>
        <source src='felix37.mp4' type='video/mp4' />
      </video>

      {/*  TEXT / BUTTONS  */}
      <div className={classes.inner}>
        {/* <h1 className={classes.title}>
          Private Boat Tours from Split
          <br />— Sail the Adriatic in Style
        </h1> */}
        <h1 className={classes.title}>
          Private.
          <br />
          Premium.
          <br />
          Unforgettable.
        </h1>

        <div className={classes.rest}>
          <p className={classes.description}>Step onto our Felix 37 speedboat for an exclusive and bespoke private boat trip from Split that blends prestige with adventure — crystal coves, five-island hopping, and Blue Cave magic all wrapped in effortless Mediterranean style.</p>
          <div className={classes.buttons}>
            <TheButton variant='dark'>Book&nbsp;Now</TheButton>
            <TheButton variant='lite'>Play&nbsp;Video</TheButton>
          </div>
        </div>
      </div>
    </section>
  );
}
