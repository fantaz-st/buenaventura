"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText, CustomEase, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import styles from "./Hero.module.css";
import useFix100vh from "@/hooks/useFix100vh";

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const copyRef = useRef(null);
  const microRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  const [introDone, setIntroDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);
  const objectUrlRef = useRef(null);

  useFix100vh();

  useGSAP(
    () => {
      const container = containerRef.current;
      const loader = loaderRef.current;
      const copy = copyRef.current;
      const microEl = microRef.current;
      const titleEl = titleRef.current;
      const subtitleEl = subtitleRef.current;
      const ctaEl = ctaRef.current;
      if (!container || !loader || !copy || !microEl || !titleEl || !subtitleEl || !ctaEl) return;

      const onReady = () => {
        CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");
        gsap.set(copy, { autoAlpha: 1 });

        const splitTitle = new SplitText(titleEl, { type: "lines", linesClass: "tline", mask: "lines" });
        const splitSub = new SplitText(subtitleEl, { type: "lines", linesClass: "subline", mask: "lines" });

        gsap.set(microEl, { y: 20, opacity: 0 });
        gsap.set(splitTitle.lines, { y: "100%", opacity: 0 });
        gsap.set(splitSub.lines, { y: "100%", opacity: 0 });
        gsap.set(ctaEl, { autoAlpha: 0, y: 16, scale: 0.98 });

        // set bg scale 1.1
        gsap.set(`.${styles.bg}`, { scale: 1.3 });

        gsap
          .timeline({ onComplete: () => setIntroDone(true) })
          .to(loader, { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "hop" })
          .to(`.${styles.bg}`, { scale: 1, duration: 1.5, ease: "power3.out" }, "-=0.7") // animate bg
          .to(microEl, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
          .to(splitTitle.lines, { y: 0, opacity: 1, duration: 0.9, stagger: 0.18, ease: "power3.out" }, "-=0.5")
          .to(splitSub.lines, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.7")
          .to(ctaEl, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }, "-=0.7");

        if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
          gsap.fromTo(
            copy,
            { yPercent: 0 },
            {
              yPercent: -15,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      };

      if (imgUrl) onReady();
    },
    { dependencies: [imgUrl], scope: containerRef }
  );

  return (
    <section ref={containerRef} className={styles.container} id="hero">
      {!introDone && (
        <div ref={loaderRef} className={styles.loader} aria-live="polite">
          <p className={styles.loadingText}>{progress ? `${progress}%` : "0%"}</p>
        </div>
      )}

      {!imgUrl && (
        <Image
          src="/assets/images/boat/rebelde boats felix 37 hero.png"
          alt=""
          aria-hidden="true"
          width={1}
          height={1}
          priority
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
          onLoadingComplete={async () => {
            try {
              const res = await fetch("/assets/images/boat/rebelde%20boats%20felix%2037%20hero.png");
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
              setImgUrl(url);
            } catch {
              setImgUrl("/assets/images/boat/rebelde boats felix 37 hero.png");
              setProgress(100);
            }
          }}
        />
      )}

      {imgUrl && <Image src={imgUrl} alt="Felix 37 luxury speedboat cruising the Adriatic near Split, Croatia" fill priority sizes="100vw" className={styles.bg} onLoad={() => setProgress(100)} />}

      <div ref={copyRef} className={styles.copy}>
        <p ref={microRef} className={styles.micro}>
          Escape • Indulge • Belong
        </p>
        <h1 ref={titleRef} className={styles.title}>
          Your Private Adriatic Escape
        </h1>
        <h3 ref={subtitleRef} className={styles.subTitle}>
          Set your own rhythm aboard Felix 37 — private day trips and charters from Split to Hvar, Vis, the Blue Cave, and hidden bays.
        </h3>
        <a
          ref={ctaRef}
          href="#tours"
          className={styles.cta}
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#tours");
            if (!el) return;
            if (window.lenis && typeof window.lenis.scrollTo === "function") {
              window.lenis.scrollTo(el, { offset: 0, duration: 1.5 });
            } else {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Explore Our Tours
        </a>
      </div>
    </section>
  );
}
