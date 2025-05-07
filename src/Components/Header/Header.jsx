// components/Header.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import Link from "next/link";
import TheButton from "../TheButton/TheButton";
import classes from "./Header.module.css";
import Image from "next/image";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "hr", label: "Hrvatski" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [opaque, setOpaque] = useState(false);
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);
  const prevY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 0) {
        setShow(true);
        setOpaque(false);
      } else if (y > prevY.current) {
        setShow(false);
      } else {
        setShow(true);
        setOpaque(true);
      }
      prevY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = [classes.header, show ? classes.visible : classes.hidden].join(" ");

  const containerClasses = ["container-xxl", classes.container, opaque ? classes.opaqueContainer : classes.transparentContainer].join(" ");

  return (
    <header className={headerClasses}>
      <div className={containerClasses}>
        <div className={classes.logo}>
          <Link href='/' aria-label='Rebelde boats home'>
            <Image src={opaque ? "/logo/break-vect-blue.svg" : "/logo/break-vect-white.svg"} priority height={77} width={160} alt='Rebelde boats logo' className={classes.logoDesktop} />
            <Image src={opaque ? "/logo/break-vect-blue-mobile.svg" : "/logo/break-vect-white-mobile.svg"} priority height={40} width={178} alt='Rebelde boats mobile logo' className={classes.logoMobile} />
          </Link>
        </div>
        <nav className={classes.nav}>
          {["Home", "Our Boat", "Our Tours", "FAQ", "Contact"].map((item) => (
            <div key={item} className={classes.navItem}>
              <AnimatedLink href={`${item.toLowerCase().replace(/ /g, "-")}`}>{item}</AnimatedLink>
            </div>
          ))}

          {/* Language switcher */}
          <div className={classes.langSwitcher} onClick={() => setLangOpen((open) => !open)} onBlur={() => setLangOpen(false)} tabIndex={0}>
            {currentLang.code.toUpperCase()}
            {langOpen && (
              <ul className={classes.langDropdown}>
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                        // TODO: hook into i18n/router
                      }}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
        <div className={classes.contact}>
          <TheButton variant='dark'>Contact Us</TheButton>
        </div>
        <button
          className={classes.hamburger}
          aria-label='Toggle menu'
          onClick={() => {
            /* mobile toggle logic */
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
