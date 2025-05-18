"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import boatImages from "@/settings/boatImages";
import AnimatedText from "../AnimatedText/AnimatedText";
import classes from "./GallerySection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection({ title, subTitle }) {
  const containerRef = useRef(null);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='boat-gallery']");
    return () => Fancybox.unbind("[data-fancybox='boat-gallery']");
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add({ isMobile: "(max-width: 768px)", isDesktop: "(min-width: 769px)" }, (ctx) => {
      const groupSize = ctx.conditions.isMobile ? 2 : 4;
      const grouped = [];
      for (let i = 0; i < boatImages.length; i += groupSize) {
        grouped.push(boatImages.slice(i, i + groupSize));
      }
      setRows(grouped);
    });
    return () => mm.revert();
  }, []);

  useLayoutEffect(() => {
    if (!rows.length) return;
    const ctx = gsap.context(() => {
      const rowEls = gsap.utils.toArray(`.${classes.row}`);
      rowEls.forEach((rowEl) => {
        const imgs = rowEl.querySelectorAll(`.${classes.imageWrapper}`);
        gsap.set(imgs, { y: "100%" });
        gsap.to(imgs, {
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: rowEl, start: "top 80%", once: true },
        });
      });
      ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, [rows]);

  return (
    <section ref={containerRef} className={classes.container}>
      <div className={classes.header}>
        <AnimatedText animateOnScroll={false} delay={1.5}>
          <h2 className={classes.title}>{title}</h2>
        </AnimatedText>
        {subTitle && (
          <AnimatedText>
            <p className={classes.subTitle}>{subTitle}</p>
          </AnimatedText>
        )}
      </div>

      <div className={classes.grid}>
        {rows.map((row, rowIdx) => (
          <div className={classes.row} key={rowIdx}>
            {row.map(({ src, alt, full }, i) => (
              <a key={i} href={full ?? src} data-fancybox="boat-gallery" className={classes.imageWrapper}>
                <svg className={classes.zoomIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>

                <div className={classes.aspectBox}>
                  <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 25vw" className={classes.image} priority={rowIdx === 0 && i < 2} />
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
