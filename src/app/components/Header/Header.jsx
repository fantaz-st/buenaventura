"use client";
import { useRef } from "react";
import classes from "./Header.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const headerContainerRef = useRef();
  const logoRef = useRef();

  useGSAP(
    () => {
      gsap.set(headerContainerRef.current, {
        yPercent: -100,
      });

      gsap.to(headerContainerRef.current, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
      });
    },
    { scope: headerContainerRef }
  );

  return (
    <div className={classes.container} ref={headerContainerRef}>
      <div className={classes.logo} ref={logoRef}>
        LOGO
      </div>
      <div className={classes.menu}>MENU</div>
    </div>
  );
};

export default Header;
