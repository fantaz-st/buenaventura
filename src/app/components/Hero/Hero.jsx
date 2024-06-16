"use client";

import classes from "./Hero.module.css";
import SplitType from "split-type";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Hero = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const videoRef = useRef(null);
  const backgroundRef = useRef(null);

  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateProgress = () => {
      if (videoElement.buffered.length > 0) {
        const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
        const duration = videoElement.duration;
        if (duration > 0) {
          const percent = Math.floor((bufferedEnd / duration) * 100);
          setLoadingPercentage(percent);
        }
      }
    };

    const handleCanPlayThrough = () => {
      setLoadingPercentage(100);
    };

    const handleLoadedData = () => {
      if (videoElement.readyState >= 2) {
        setLoadingPercentage(100);
      }
    };

    videoElement.addEventListener("progress", updateProgress);
    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement.addEventListener("loadeddata", handleLoadedData);

    return () => {
      videoElement.removeEventListener("progress", updateProgress);
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const mySplitText = new SplitType(titleRef.current, { types: "chars" });

      gsap.set(titleRef.current, { perspective: 600 });
      gsap.set(containerRef.current, { autoAlpha: 1 });
      gsap.set(backgroundRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

      tl.from(backgroundRef.current, { clipPath: "inset(100% 0% 0% 0%)", duration: 1, ease: "power3.out" }).from(mySplitText.chars, { yPercent: 100, rotationX: -90, transformOrigin: "0% 50% -50", ease: "power3.out", stagger: 0.06, duration: 1.5 }, "-0.25");
    },
    { scope: containerRef }
  );
  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.title} ref={titleRef}>
        <h1>BUENAVENTURA</h1>
      </div>
      {loadingPercentage < 100 && (
        <div style={{ position: "absolute", bottom: "0%", right: "0%", transform: "translate(0%, 0%)", zIndex: 3 }}>
          <p style={{ fontSize: "1rem", fontWeight: 500, color: "#fff" }}>Loading: {loadingPercentage}%</p>
        </div>
      )}
      <div className={classes.background} ref={backgroundRef}>
        <video ref={videoRef} width='100%' height='100%' autoPlay muted loop>
          <source src='felix37.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={classes.backdrop}></div>
    </div>
  );
};

export default Hero;
