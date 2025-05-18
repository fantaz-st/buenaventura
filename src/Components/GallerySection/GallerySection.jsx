"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import boatImages from "@/settings/boatImages";
import classes from "./GallerySection.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const GallerySection = ({ title, subTitle }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='boat-gallery']");
    return () => Fancybox.unbind("[data-fancybox='boat-gallery']");
  }, []);

  useEffect(() => {
    const rows = gsap.utils.toArray(`.${classes.row}`);
    rows.forEach((row) => {
      const images = row.querySelectorAll(`.${classes.imageWrapper}`);
      gsap.set(images, { y: "100%" });

      gsap.to(images, {
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          once: true,
        },
      });
    });
  }, []);

  // Group images into rows of 4 (or 2 on mobile — layout handles it)
  const imageRows = [];
  for (let i = 0; i < boatImages.length; i += 4) {
    imageRows.push(boatImages.slice(i, i + 4));
  }

  return (
    <section className={classes.container} ref={containerRef}>
      <div className={classes.header}>
        <AnimatedText animateOnScroll={false} delay={1.5}>
          <h2 className={classes.title}>{title}</h2>
        </AnimatedText>
        <AnimatedText>
          <p className={classes.subTitle}>{subTitle}</p>
        </AnimatedText>
      </div>

      <div className={classes.grid}>
        {imageRows.map((row, rowIndex) => (
          <div className={classes.row} key={rowIndex}>
            {row.map(({ src, alt, full }, i) => (
              <a key={i} href={full ?? src} data-fancybox='boat-gallery' className={classes.imageWrapper}>
                <div className={classes.aspectBox}>
                  <Image src={src} alt={alt} fill sizes='(max-width: 768px) 50vw, 25vw' className={classes.image} priority={rowIndex === 0 && i < 2} />
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
