import classes from "./SectionHeader.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ color = "black", title, subTitle, subTitleStyle, titleStyle, ...rest }) => {
  const containerRef = useRef(null);
  const colorClass = color === "black" ? classes.black : classes.white;
  const titleClassNames = `${classes.title} ${colorClass}`;
  const subTitleClassNames = `${classes.subTitle} ${colorClass}`;

  useGSAP(
    () => {
      const splitTitle = new SplitType(`.${classes.title}`, { types: "words" });
      const splitSub = new SplitType(`.${classes.subTitle}`, { types: "lines" });

      gsap.set(splitTitle.words, { yPercent: 100, opacity: 0 });
      gsap.set(splitSub.lines, { yPercent: 100, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .to(splitTitle.words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.075,
          ease: "power2.out",
        })
        .to(
          splitSub.lines,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.6"
        );

      return () => {
        splitTitle.revert();
        splitSub.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div className={classes.container} ref={containerRef}>
      <h1 className={titleClassNames} style={titleStyle} {...rest}>
        {title}
      </h1>
      <p className={subTitleClassNames} style={subTitleStyle}>
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;
