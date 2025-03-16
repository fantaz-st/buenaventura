"use client";

import classes from "./Hero.module.css";
import SplitType from "split-type";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import Button from "../Button/Button";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

const Hero = () => {
  const containerRef = useRef();
  const videoRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(
    () => {
      CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

      const videoElement = videoRef.current;

      if (!videoElement) {
        console.error("Video element is null");
        return;
      }

      const checkVideoLoaded = () => {
        if (videoElement.readyState >= 3) {
          const bufferedEnd = videoElement.buffered.end(0);
          const duration = videoElement.duration;

          if (bufferedEnd === duration) {
            const tl = gsap.timeline();
            const mySplitText = new SplitType(`.${classes.title}`, { types: "chars" });

            gsap.set(containerRef.current, { visibility: "visible" });

            tl.from(backgroundRef.current, {
              clipPath: "inset(100% 0% 0% 0%)",
              duration: 1.5,
              ease: "hop",
              delay: 0.5,
            })
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

            clearInterval(checkInterval);
          }
        }
      };

      const checkInterval = setInterval(checkVideoLoaded, 100);

      return () => {
        clearInterval(checkInterval);
      };
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
          <p className={classes.description}>Experience the Adriatic like never before with private boat tours, island-hopping adventures, and seamless transfers designed for true explorers.</p>
          <Button>Explore our Tours</Button>
        </div>
      </div>
      <div className={classes.background} ref={backgroundRef}>
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src='felix37.mp4?v=1' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={classes.backdrop}></div>
    </div>
  );
};

export default Hero;
