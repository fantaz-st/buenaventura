"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import styles from "./Button.module.css";

const Button = ({ variant = "lite", children }) => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    const splitText = new SplitType(buttonRef.current, { types: "chars", tagName: "span" });

    const letters = splitText.chars;

    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(letters, {
        yPercent: -120,
        stagger: { amount: 0.075 },
        duration: 0.5,
        ease: "power4.out",
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(letters, {
        yPercent: 0,
        stagger: { amount: 0.075 },
        duration: 0.5,
      });
    });
  }, []);

  return (
    <a href='#' className={variant === "dark" ? styles.btnDark : styles.btn} ref={buttonRef}>
      <span className={styles.btnText}>{children}</span>
    </a>
  );
};

export default Button;
