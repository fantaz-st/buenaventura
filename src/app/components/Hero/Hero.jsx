"use client";

import classes from "./Hero.module.css";
import SplitType from "split-type";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const videoRef = useRef(null);
  const backgroundRef = useRef(null);

  useGSAP(
    () => {
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

            // gsap.set(titleRef.current, { perspective: 1000 });
            gsap.set(containerRef.current, { autoAlpha: 1 });
            gsap.set(backgroundRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

            tl.from(backgroundRef.current, {
              clipPath: "inset(100% 0% 0% 0%)",
              duration: 0.75,
              ease: "power2.in",
              delay: 0.5,
            }).from(
              mySplitText.chars,
              {
                yPercent: 85,
                rotationX: -80,
                duration: 1.05,
                ease: "power2.out",
                stagger: 0.02,
                transformOrigin: "center 5% -80px",
              },
              "1"
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
