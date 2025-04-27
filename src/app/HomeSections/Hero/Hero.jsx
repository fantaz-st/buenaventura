// components/Hero.js
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import Hls from "hls.js";
import TheButton from "../../Components/TheButton/TheButton";
import classes from "./Hero.module.css";

gsap.registerPlugin(CustomEase);

export default function Hero() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const videoRef = useRef(null);

  // GSAP intro animation
  useGSAP(
    () => {
      CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");
      gsap.set(`.${classes.inner}`, { autoAlpha: 1 });

      const tl = gsap.timeline();
      const split = new SplitType(`.${classes.title}`, { types: "chars" });

      tl.fromTo(backgroundRef.current, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0 0 0 0)", duration: 1.5, ease: "hop", delay: 0.5 })
        .from(
          split.chars,
          {
            yPercent: 100,
            rotationX: -90,
            duration: 1,
            ease: "power2.out",
            stagger: 0.02,
            transformOrigin: "center center -200px",
          },
          "+=0.5"
        )
        .fromTo(`.${classes.title_framed}`, { clipPath: "inset(0% 50% 0% 50%)" }, { clipPath: "inset(0 0 0 0)", duration: 1.2, ease: "power4.out" })
        .fromTo(`.${classes.rest}`, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=1");
    },
    { scope: containerRef }
  );

  // HLS.js setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const src = "/videos/hls/master.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <div className={classes.container} ref={containerRef} id='hero'>
      <div className={classes.inner}>
        <div className={classes.text}>
          <h1 className={classes.title}>
            Private.
            <br />
            Premium.
            <br />
            Unforgettable.
          </h1>
        </div>
        <div className={classes.rest}>
          <p className={classes.description}>Discover the Adriatic in style aboard REBELDE — your personal luxury boat tour in Croatia.</p>
          <div className={classes.buttons}>
            <TheButton variant='dark'>Book Now</TheButton>
            <TheButton variant='lite'>Play Video</TheButton>
          </div>
        </div>
      </div>

      <div className={classes.background} ref={backgroundRef}>
        <video ref={videoRef} className={classes.theVideo} poster='/video-poster.webp' preload='metadata' playsInline muted autoPlay loop controls width='100%' height='100%'></video>
      </div>
    </div>
  );
}
