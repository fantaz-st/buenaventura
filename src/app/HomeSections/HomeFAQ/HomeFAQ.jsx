"use client";
import { useState, useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import TheButton from "../../Components/TheButton/TheButton";
import classes from "./HomeFAQ.module.css";
import faqs from "@/app/settings/faqs";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef({});
  const iconRefs = useRef({});
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(`.${classes.item}`);

      gsap.set(items, { y: 40, opacity: 0 });

      const splitTitle = new SplitType(`.${classes.title}`, { types: "words", tagName: "span" });
      const splitSub = new SplitType(`.${classes.subTitle}`, { types: "lines", tagName: "span" });

      gsap.set(splitTitle.words, { yPercent: 100, opacity: 0 });
      gsap.set(splitSub.lines, { yPercent: 100, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .to(splitTitle.words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.075,
          ease: "power2.out",
        })
        .to(
          splitSub.lines,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.6"
        );

      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  const toggle = useCallback(
    (id) => {
      const isOpening = openIndex !== id;
      setOpenIndex(isOpening ? id : null);

      Object.entries(answerRefs.current).forEach(([key, node]) => {
        const isCurrent = +key === id;

        gsap.to(node, {
          height: isCurrent && isOpening ? node.querySelector("p").scrollHeight : 0,
          opacity: isCurrent && isOpening ? 1 : 0,
          duration: 0.4,
          ease: "power1.inOut",
        });

        gsap.to(iconRefs.current[key], {
          rotate: isCurrent && isOpening ? 45 : 0,
          duration: 0.4,
          ease: "power1.inOut",
        });
      });
    },
    [openIndex]
  );

  const renderedFaqs = useMemo(
    () =>
      faqs.home.map((faq) => (
        <li key={faq.id} className={classes.item}>
          <div className={classes.button} onClick={() => toggle(faq.id)}>
            <div className={classes.qinner}>
              <h3 className={classes.question}>{faq.question}</h3>
              <div className={classes.iconWrap}>
                <div className={classes.iconScale}>
                  <div ref={(el) => (iconRefs.current[faq.id] = el)} className={classes.iconTransition}>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                      <path d='M10.152 17.5H7.848V9.994H0V7.972H7.848V0.5H10.152V7.972H18V9.994H10.152V17.5Z' fill='currentColor' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div ref={(el) => (answerRefs.current[faq.id] = el)} className={classes.answerWrap}>
              <p className={classes.answer}>{faq.answer}</p>
            </div>
          </div>
        </li>
      )),
    []
  );

  return (
    <div className={classes.container}>
      <div className={classes.inner} ref={containerRef}>
        <div className={classes.header}>
          <h1 className={classes.title}>Before You Set Sail.</h1>
          <p className={classes.subTitle}>Wondering what to pack? When to arrive? What&apos;s included? We&apos;re here to keep it simple — because your only job should be to enjoy the ride.</p>
        </div>
        <ul className={classes.list}>{renderedFaqs}</ul>
        <div className={classes.buttonWrap}>
          <TheButton variant='dark'>Read more FAQs</TheButton>
        </div>
      </div>
    </div>
  );
}
