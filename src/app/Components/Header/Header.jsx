"use client";
import React, { useState, useEffect, useRef } from "react";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import classes from "./Header.module.css";
import Link from "next/link";
import TheButton from "../TheButton/TheButton";

const Header = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    setTimeout(() => {
      setIsScrolledUp(true);
    }, 2000);
  }, []);

  return (
    <header className={`${classes.header} ${isScrolledUp ? classes.show : classes.hide}`} ref={headerRef}>
      <div className={`container-xxl ${classes.container}`}>
        <div className={classes.logo}>
          <Link href='/' aria-label='Rebelde boats home'>
            <h3>
              <span>R</span>BD
            </h3>
          </Link>
        </div>
        <nav className={`${classes.nav} ${isMobileMenuOpen && classes.open}`}>
          <div className={classes.wrapper}>
            {["Home", "Our Boat", "Our Tours", "FAQ", "Contact"].map((item) => (
              <div key={item} className={classes.navItem}>
                <AnimatedLink href={`#${item.toLowerCase().replace(/ /g, "-")}`}>{item}</AnimatedLink>
              </div>
            ))}
            <a href='#' style={{ color: "var(--color-black)" }}>
              EN
            </a>
          </div>
        </nav>
        <div className={classes.contact}>
          <TheButton variant='dark'>Contact Us</TheButton>
        </div>
        <div className={classes.hamburger} onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
