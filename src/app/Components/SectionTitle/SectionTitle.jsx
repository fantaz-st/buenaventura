import classes from "./SectionTitle.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ color = "black", children, style, ...rest }) => {
  const containerRef = useRef(null);
  const colorClass = color === "black" ? classes.black : classes.white;
  const classNames = `${classes.title} ${colorClass}`;

  useGSAP(
    () => {
      gsap.fromTo(
        `.${classes.title}`,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            // toggleActions: "play none none reset",
            once: true,
          },
        }
      );
    },
    {
      scope: containerRef,
    }
  );
  return (
    <div className={classes.container} ref={containerRef}>
      <h1 className={classNames} style={style} {...rest}>
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;
