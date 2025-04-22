"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import TheButton from "../TheButton/TheButton";
import classes from "./HomeFAQ.module.css";
import faqs from "@/app/settings/faqs";

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef({});

  const toggle = (id) => {
    const isOpening = openIndex !== id;
    setOpenIndex(isOpening ? id : null);

    const el = answerRefs.current[id];
    if (!el) return;

    const content = el.querySelector("p");
    const fullHeight = content.scrollHeight;

    Object.entries(answerRefs.current).forEach(([key, node]) => {
      if (Number(key) !== id) {
        gsap.to(node, { height: 0, opacity: 0, duration: 0.3, ease: "power1.inOut" });
        gsap.to(`.icon-${key}`, { rotate: 0, duration: 0.3, ease: "power1.inOut" });
      }
    });

    gsap.to(el, {
      height: isOpening ? fullHeight : 0,
      opacity: isOpening ? 1 : 0,
      duration: 0.4,
      ease: "power1.inOut",
    });

    gsap.to(`.icon-${id}`, {
      rotate: isOpening ? 45 : 0,
      duration: 0.4,
      ease: "power1.inOut",
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <h1>Frequently Asked Questions</h1>
        <ul className={classes.list}>
          {faqs.home.map((faq) => (
            <li key={faq.id} className={classes.item}>
              <div className={classes.button} onClick={() => toggle(faq.id)}>
                <div className={classes.qinner}>
                  <h3 className={classes.question}>{faq.question}</h3>
                  <div className={classes.iconWrap}>
                    <div className={classes.iconScale}>
                      <div className={`icon-${faq.id} ${classes.iconTransition}`}>
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                          <path d='M10.152 17.5H7.848V9.994H0V7.972H7.848V0.5H10.152V7.972H18V9.994H10.152V17.5Z' fill='currentColor' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classes.answerWrap} ref={(el) => (answerRefs.current[faq.id] = el)}>
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
