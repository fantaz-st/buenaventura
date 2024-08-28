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
    console.log(loadingPercentage);

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
      const bufferedEnd = videoElement.buffered.end(0);
      const duration = videoElement.duration;

      if (bufferedEnd === duration) {
        setLoadingPercentage(100);
        console.log("Video is fully loaded");

        // Trigger animations here after the video is fully buffered
        const tl = gsap.timeline();
        const mySplitText = new SplitType(titleRef.current, { types: "chars" });

        gsap.set(titleRef.current, { perspective: 600 });
        gsap.set(containerRef.current, { autoAlpha: 1 });
        gsap.set(backgroundRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

        tl.from(backgroundRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1,
          ease: "power3.out",
        }).from(
          mySplitText.chars,
          {
            yPercent: 100,
            rotationX: -90,
            transformOrigin: "0% 50% -50",
            ease: "power3.out",
            stagger: 0.06,
            duration: 1.5,
          },
          "-0.25"
        );
      }
    };

    videoElement.addEventListener("progress", updateProgress);
    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      videoElement.removeEventListener("progress", updateProgress);
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.title} ref={titleRef}>
        <h1>BUENAVENTURA</h1>
      </div>
      {loadingPercentage < 100 && (
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "0%",
            transform: "translate(0%, 0%)",
            zIndex: 3,
          }}
        >
          <p style={{ fontSize: "1rem", fontWeight: 500, color: "#fff" }}>Loading: {loadingPercentage}%</p>
        </div>
      )}
      <div className={classes.background} ref={backgroundRef}>
        <video ref={videoRef} autoPlay muted loop>
          <source src='felix37.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={classes.backdrop}></div>
    </div>
  );
};

export default Hero;
