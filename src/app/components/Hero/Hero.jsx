"use client";

import classes from "./Hero.module.css";
import SplitType from "split-type";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

const Hero = () => {
  const containerRef = useRef();
  const titleRef = useRef();
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
          // ReadyState 3 means "can play" and ReadyState 4 means "can play through"
          const bufferedEnd = videoElement.buffered.end(0);
          const duration = videoElement.duration;

          if (bufferedEnd === duration) {
            const tl = gsap.timeline();
            const mySplitText = new SplitType(titleRef.current, { types: "chars" });

            gsap.set(containerRef.current, { autoAlpha: 1 });
            gsap.set(backgroundRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

            tl.from(backgroundRef.current, {
              clipPath: "inset(100% 0% 0% 0%)",
              duration: 1.5,
              ease: "hop",
              delay: 0.5,
            }).from(
              mySplitText.chars,
              {
                yPercent: 100,
                rotationX: -90,
                duration: 1,
                ease: "power2.out",
                stagger: 0.02,

                // transformOrigin: "center 5% -80px",
                transformOrigin: "center center -200px",
              },
              "-=0.5"
            );

            clearInterval(checkInterval); // Stop checking once fully loaded
          }
        }
      };

      // Check every 100ms until the video is fully buffered
      const checkInterval = setInterval(checkVideoLoaded, 100);

      return () => {
        clearInterval(checkInterval);
      };
    },
    { scope: containerRef }
  );

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.title} ref={titleRef}>
        <h1>BUENAVENTURA</h1>
        {/* <h1>AROCK</h1> */}
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
