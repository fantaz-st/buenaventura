"use client";
import React, { useState, useEffect, useRef } from "react";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import Link from "next/link";
import classes from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const [opaque, setOpaque] = useState(false); // also used as "compact"
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);

  const prevY = useRef(0);
  const heroBottomRef = useRef(0);

  const router = useRouter();

  /* Prefetch core routes */
  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/our-boat");
  }, [router]);

  /* Measure hero height on load + resize */
  useEffect(() => {
    const calcHeroBottom = () => {
      const hero = document.getElementById("hero");
      heroBottomRef.current = hero ? hero.offsetTop + hero.offsetHeight : 0;
    };

    calcHeroBottom();
    window.addEventListener("resize", calcHeroBottom);
    return () => window.removeEventListener("resize", calcHeroBottom);
  }, []);

  /* Scroll behaviour */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // hide on downward scroll, show on upward scroll
      if (y > prevY.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      // compact / opaque header only after hero
      setOpaque(y > heroBottomRef.current);

      prevY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = [classes.header, show ? classes.visible : classes.hidden].join(" ");

  const containerClasses = ["container-xxl", classes.container, opaque ? classes.opaqueContainer : classes.transparentContainer].join(" ");

  return (
    <header className={headerClasses} id='header'>
      <div className={containerClasses}>
        {/* Left nav */}
        <nav className={`${classes.nav} ${classes.navLeft}`}>
          <div className={classes.navItem}>
            <AnimatedLink href='/'>HOME</AnimatedLink>
          </div>
          <div className={classes.navItem}>
            <AnimatedLink href='/our-boat'>OUR BOAT</AnimatedLink>
          </div>
          <div className={classes.navItem}>
            <AnimatedLink href='/our-tours'>OUR TOURS</AnimatedLink>
          </div>
        </nav>

        {/* Logo */}
        <div className={classes.logo} id='main-logo'>
          <Link href='/' aria-label='Rebelde boats home'>
            <Image src={opaque ? "/logo/break-vect-blue.svg" : "/logo/break-vect-white.svg"} priority height={77} width={160} alt='Rebelde boats logo' className={classes.logo} />
          </Link>
        </div>

        {/* Right nav */}
        <nav className={`${classes.nav} ${classes.navRight}`}>
          <div className={classes.navItem}>
            <AnimatedLink href='/faq'>FAQ-s</AnimatedLink>
          </div>
          <div className={classes.navItem}>
            <AnimatedLink href='/contact'>CONTACT</AnimatedLink>
          </div>

          {/* Language switcher */}
          <div className={classes.langSwitcher} onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)} onFocus={() => setLangOpen(true)} onBlur={() => setLangOpen(false)} tabIndex={0}>
            {currentLang.code.toUpperCase()}
            {langOpen && (
              <ul className={classes.langDropdown}>
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => {
                        setCurrentLang(lang);
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
      </div>
    </header>
  );
}
