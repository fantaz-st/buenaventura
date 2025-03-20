"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";
import Button from "../Button/Button";
import classes from "./Hero.module.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase);

const Hero = () => {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(
    () => {
      CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

      gsap.set(`.${classes.inner}`, { autoAlpha: 1 });

      // 1) Handler for canplaythrough
      // Hero Animations
      const tl = gsap.timeline();
      const mySplitText = new SplitType(`.${classes.title}`, { types: "chars" });

      tl.fromTo(
        backgroundRef.current,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "hop", delay: 0.5 }
      )
        .from(
          mySplitText.chars,
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
        .fromTo(
          `.${classes.title_framed}`,
          { clipPath: "inset(0% 50% 0% 50%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.out",
          }
        )
        .fromTo(`.${classes.rest}`, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=1");
    },
    { scope: containerRef }
  );

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        <div className={classes.text}>
          <h1 className={classes.title}>BEYOND THE SHORE</h1>
          <h1 className={classes.title_framed}>PRESTIGE + BOLD</h1>
        </div>
        <div className={classes.rest}>
          <p className={classes.description}>Experience the Adriatic like never before...</p>
          <Button>Explore our Tours</Button>
        </div>
      </div>
      <div className={classes.background} ref={backgroundRef}>
        <video ref={videoRef} autoPlay muted loop playsInline poster='/video-poster.webp' preload='auto'>
          <source src='felix37.mp4?v=1' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={classes.loading} ref={loaderRef}>
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Hero;
