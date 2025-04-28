// components/HomeFAQ.jsx
"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import TheButton from "../../Components/TheButton/TheButton";
import classes from "./HomeFAQ.module.css";
import faqs from "@/app/settings/faqs";
import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

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
        <SectionHeader title='Before You Set Sail.' subTitle="Wondering what to pack? When to arrive? What's included? We're here to keep it simple — because your only job should be to enjoy the ride." color='black' />
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
