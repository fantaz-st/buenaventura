"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

import classes from "./HamburgerMenu.module.css";

/* routes in the mobile menu */
const links = [
  { href: "/", label: "Home" },
  { href: "/our-boat", label: "Our Boat" },
  { href: "/our-tours", label: "Our Tours" },
  { href: "/faq", label: "FAQ-s" },
  { href: "/contact", label: "Contact" },
];

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* animation targets */
  const overlayRef = useRef(null); // dark veil
  const menuRef = useRef(null); // white panel
  const logoRef = useRef(null); // logo inside the menu
  const linkListRef = useRef(null); // <ul> list
  const tl = useRef(null); // GSAP timeline

  /* build the timeline once ----------------------------------- */
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1");

    tl.current = gsap
      .timeline({ paused: true })

      /* 1 ▸ fade‐in overlay */
      .to(overlayRef.current, {
        opacity: 0.45,
        duration: 0.3,
        ease: "power2.out",
      })

      /* 2 ▸ slide menu panel up */
      .to(
        menuRef.current,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.6,
          ease: "hop",
        },
        "-=0.1"
      )

      /* 3 ▸ logo drops down */
      .from(
        logoRef.current,
        {
          y: -40,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.15"
      )

      /* 4 ▸ nav links stagger in */
      .from(
        linkListRef.current.children,
        {
          y: 24,
          opacity: 0,
          stagger: 0.07,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.1"
      );
  }, []);

  /* play / reverse when menuOpen changes ---------------------- */
  useEffect(() => {
    if (!tl.current) return;
    menuOpen ? tl.current.play() : tl.current.reverse();
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* floating toggle button */}
      <button className={classes.container} aria-label='Toggle menu' aria-haspopup='true' aria-expanded={menuOpen} onClick={toggleMenu}>
        <div className={classes.inner}>
          <p>{menuOpen ? "Close" : "Menu"}</p>
          <div className={classes.hamburger}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </button>

      {/* overlay */}
      <div ref={overlayRef} className={`${classes.overlay} ${menuOpen ? classes.overlayOpen : ""}`} onClick={() => setMenuOpen(false)} />

      {/* sliding white panel */}
      <div ref={menuRef} className={`${classes.menu} ${menuOpen ? classes.menuOpen : ""}`}>
        {/* logo that animates down */}
        <div ref={logoRef} className={classes.logo}>
          <Link href='/' aria-label='Rebelde Boats home'>
            <Image src='/logo/break-vect-blue.svg' height={77} width={160} priority alt='Rebelde Boats logo' />
          </Link>
        </div>

        {/* navigation */}
        <nav>
          <ul ref={linkListRef} className={classes.navList}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
