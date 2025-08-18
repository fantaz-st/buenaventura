"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const checkScroll = () => {
      const pastThreshold = window.scrollY > 300;
      setShow(pastThreshold);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17322617143/fhd7CMSZ04gbELfSiMRA",
      });
    }
  };

  return (
    <a className={`${classes.container} ${show ? classes.visible : ""}`} target="_blank" href="https://wa.me/385997973959" rel="noopener noreferrer" aria-label="Chat on WhatsApp" onClick={handleClick}>
      <Image src="/assets/whatsappicon2.svg" width={24} height={24} sizes="24px" className={classes.icon} alt="WhatsApp logo for direct chat - Rebelde boats" />
      <p>Chat On WhatsApp</p>
    </a>
  );
}
