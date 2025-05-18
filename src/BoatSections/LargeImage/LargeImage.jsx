"use client";

import Image from "next/image";
import gsap from "gsap";
import classes from "./LargeImage.module.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LargeImage() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        })
        .to(imageWrapperRef.current, {
          width: "100%",
          height: "100%",
          borderRadius: "0vh",
          ease: "power4.inOut",
          duration: 1,
        });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={classes.container}>
      <div ref={imageWrapperRef} className={classes.imageWrapper}>
        <Image src='/assets/images/boat/felix 37 Rebelde boats.jpg' alt='Large image of speedboat Felix 37 from Rebelde Boats' fill className={classes.image} sizes='100vw' />
      </div>
    </div>
  );
}
