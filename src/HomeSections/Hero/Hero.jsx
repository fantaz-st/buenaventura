"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText, CustomEase, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import horizontalLoop from "../../../helpers/horizontalScroll";
import styles from "./Hero.module.css";
import useFix100vh from "@/hooks/useFix100vh";

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const copyRef = useRef(null);
  const subtitleRef = useRef(null);
  const [introDone, setIntroDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const loopRef = useRef(null);
  const objectUrlRef = useRef(null);

  useFix100vh();

  useGSAP(
    () => {
      const container = containerRef.current;
      const loader = loaderRef.current;
      const video = videoRef.current;
      const copy = copyRef.current;
      const subtitleEl = subtitleRef.current;
      const cards = gsap.utils.toArray(`.${styles.title}`);
      if (!container || !loader || !video || !copy || !subtitleEl) return;

      const onReady = () => {
        video.classList.add(styles.videoVisible);
        CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");
        gsap.set(copy, { autoAlpha: 1 });
        const splitTitle = new SplitText(`.${styles.title}`, { type: "chars", charsClass: "char" });
        gsap.set(splitTitle.chars, { y: "100%", opacity: 0 });
        const splitSub = new SplitText(subtitleEl, { type: "lines", linesClass: "subline", mask: "lines" });
        gsap.set(splitSub.lines, { y: "100%", opacity: 0 });
        gsap
          .timeline({ onComplete: () => setIntroDone(true) })
          .to(loader, { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "hop" })
          .to(splitTitle.chars, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: "power3.out" }, "-=0.8")
          .to(splitSub.lines, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.8")
          .to(`.${styles.footer}`, { y: 0, duration: 1, ease: "power4.out" }, "-=0.4");
      };

      const loadVideoWithProgress = async () => {
        const res = await fetch("/hero-rebelde-boats-felix-37.mp4");
        const len = Number(res.headers.get("content-length")) || 0;
        const reader = res.body?.getReader();
        const stream = new ReadableStream({
          async start(controller) {
            let loaded = 0;
            for (;;) {
              const { done, value } = await reader.read();
              if (done) break;
              loaded += value.byteLength;
              if (len) setProgress(Math.min(100, Math.round((loaded / len) * 100)));
              controller.enqueue(value);
            }
            controller.close();
          },
        });
        const blob = await new Response(stream).blob();
        const url = URL.createObjectURL(blob);
        objectUrlRef.current = url;
        video.src = url;
        video.load();
      };

      video.addEventListener("canplaythrough", onReady, { once: true });
      loadVideoWithProgress();

      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(copy, { yPercent: 0 }, { yPercent: -30, ease: "none", scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: true } });
      }

      if (!loopRef.current) {
        loopRef.current = horizontalLoop(cards, { repeat: -1, speed: 0.85, paddingRight: 0 });
      }

      return () => {
        video.removeEventListener("canplaythrough", onReady);
        if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      };
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={styles.container} id="hero">
      {!introDone && (
        <div ref={loaderRef} className={styles.loader} aria-live="polite">
          <p className={styles.loadingText}>{progress ? `${progress}%` : "0%"}</p>
        </div>
      )}
      <video ref={videoRef} className={styles.video} playsInline muted loop autoPlay preload="none" poster="/video-poster.webp" />
      <noscript>
        <picture>
          <img src="/video-poster.webp" alt="Aerial view of Felix 37 speedboat cruising the Adriatic" className={styles.noscriptPoster} width="1920" height="1080" />
        </picture>
      </noscript>
      <div ref={copyRef} className={styles.copy}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeInner}>
            {Array.from({ length: 4 }).map((_, i) => (
              <h1 key={i} className={styles.title}>
                Rebelde boats *
              </h1>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.keepScrolling}>
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
          </div>
          <h3 ref={subtitleRef} className={styles.subTitle}>
            Your Private Escape on the Adriatic – Luxury Boat Tours from Split to Hvar, Vis&nbsp;&amp;&nbsp;Beyond
          </h3>
        </div>
      </div>
    </section>
  );
}
