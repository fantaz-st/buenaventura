/* components/Header/Header.jsx */
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import classes from "./Header.module.css";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "hr", label: "Hrvatski" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
];

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-boat", label: "Our Boat" },
  { href: "/our-tours", label: "Our Tours" },
  { href: "/faq", label: "FAQ-s" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [opaque, setOpaque] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currLang, setCurrLang] = useState(LANGUAGES[0]);
  const [menuOpen, setMenuOpen] = useState(false); // pressed state
  const [menuActive, setActive] = useState(false); // true until reverse completes

  const prevY = useRef(0);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const listRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y < prevY.current);
      setOpaque(y > 300);
      prevY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

    tl.current = gsap
      .timeline({ paused: true })
      .to(overlayRef.current, { opacity: 0.45, duration: 0.3, ease: "power2.out" })
      .to(panelRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "hop" }, "-=0.1")
      .from(listRef.current.children, { y: 24, opacity: 0, stagger: 0.07, duration: 0.35, ease: "power2.out" }, "-=0.1");

    tl.current.eventCallback("onComplete", () => setActive(true)); // fully open
    tl.current.eventCallback("onReverseComplete", () => setActive(false)); // fully closed
  }, []);

  useEffect(() => {
    if (tl.current) menuOpen ? tl.current.play() : tl.current.reverse();
  }, [menuOpen]);

  /* logo / burger colour: turn dark as soon as the button is pressed, stay dark until close-animation done */
  const darkNow = opaque || menuOpen || menuActive;
  const headerCls = `${classes.header} ${show ? classes.visible : classes.hidden} ${menuActive ? classes.menuActive : ""}`;
  const containerCls = `container-xxl ${classes.container} ${opaque ? classes.opaqueContainer : classes.transparentContainer}`;
  const burgerCls = `${classes.hamburgerBtn} ${classes[darkNow ? "dark" : "light"]}`;
  const burgerIcon = `${classes.hamburger} ${menuOpen ? classes.open : ""}`;

  return (
    <>
      <header className={headerCls}>
        <div className={containerCls}>
          <div className={classes.logo}>
            <Link href='/' aria-label='Rebelde Boats home'>
              <Image src={darkNow ? "/logo/break-vect-blue-mobile.svg" : "/logo/break-vect-white-mobile.svg"} height={44} width={180} priority alt='Rebelde Boats logo' />
            </Link>
          </div>

          <nav className={classes.nav}>
            {LINKS.map(({ href, label }) => (
              <div key={href} className={classes.navItem}>
                <AnimatedLink href={href}>{label.toUpperCase()}</AnimatedLink>
              </div>
            ))}

            <div className={classes.langSwitcher} onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)} onFocus={() => setLangOpen(true)} onBlur={() => setLangOpen(false)} tabIndex={0}>
              {currLang.code.toUpperCase()}
              {langOpen && (
                <ul className={classes.langDropdown}>
                  {LANGUAGES.map((l) => (
                    <li key={l.code}>
                      <button onClick={() => setCurrLang(l)}>{l.label}</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          <button className={burgerCls} onClick={() => setMenuOpen((p) => !p)} aria-label='Toggle menu' aria-expanded={menuOpen}>
            <p>{menuOpen ? "Close" : "Menu"}</p>
            <div className={burgerIcon}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </header>

      <div ref={overlayRef} className={`${classes.overlay} ${menuOpen ? classes.overlayOpen : ""}`} onClick={() => setMenuOpen(false)} />

      <div ref={panelRef} className={`${classes.menu} ${menuOpen ? classes.menuOpen : ""}`}>
        <nav>
          <ul ref={listRef} className={classes.navList}>
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
