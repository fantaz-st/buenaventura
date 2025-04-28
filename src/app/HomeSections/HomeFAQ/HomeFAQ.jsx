// components/HomeFAQ.jsx
"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import TheButton from "../../Components/TheButton/TheButton";
import classes from "./HomeFAQ.module.css";
import faqs from "@/app/settings/faqs";
import SectionTitle from "@/app/Components/SectionTitle/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef({});
  const iconRefs = useRef({});
  const containerRef = useRef(null);

  /*   useGSAP(
    () => {
      const heading = containerRef.current.querySelector(`.${classes.heading}`);
      gsap.to(heading, {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%", // when top of heading hits 80% down the viewport
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  ); */

  const toggle = (id) => {
    const isOpening = openIndex !== id;
    setOpenIndex(isOpening ? id : null);

    // collapse others
    Object.entries(answerRefs.current).forEach(([key, node]) => {
      if (+key !== id) {
        gsap.to(node, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(iconRefs.current[key], {
          rotate: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }
    });

    // expand/collapse this one
    const el = answerRefs.current[id];
    const fullH = el.querySelector("p").scrollHeight;
    gsap.to(el, {
      height: isOpening ? fullH : 0,
      opacity: isOpening ? 1 : 0,
      duration: 0.4,
      ease: "power1.inOut",
    });
    gsap.to(iconRefs.current[id], {
      rotate: isOpening ? 45 : 0,
      duration: 0.4,
      ease: "power1.inOut",
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner} ref={containerRef}>
        {/* <h1 className={classes.heading}>Frequently Asked Questions</h1> */}
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <ul className={classes.list}>
          {faqs.home.map((faq) => (
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
          ))}
        </ul>
        <div className={classes.buttonWrap}>
          <TheButton variant='dark'>Read more FAQs</TheButton>
        </div>
      </div>
    </div>
  );
}
