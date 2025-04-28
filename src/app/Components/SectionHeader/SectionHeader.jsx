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
      /* 1️⃣  split the title into WORDS,
           and the subtitle into LINES  */
      const splitTitle = new SplitType(containerRef.current.querySelector(`.${classes.title}`), { types: "words" });
      const splitSub = new SplitType(containerRef.current.querySelector(`.${classes.subTitle}`), { types: "lines" });

      /* 2️⃣  hide everything so it can slide in */
      gsap.set(splitTitle.words, { yPercent: 100, opacity: 0 });
      gsap.set(splitSub.lines, { yPercent: 100, opacity: 0 });

      /* 3️⃣  timeline that fires when the header scrolls into view */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        })
        // word-by-word on the TITLE
        .to(splitTitle.words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.075, // word stagger
          ease: "power2.out",
        })
        // line-by-line on the SUBTITLE
        .to(
          splitSub.lines,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15, // line stagger
            ease: "power2.out",
          },
          "-=0.6"
        ); // overlap a little with the tail of the word animation

      /* 4️⃣  clean up SplitType wrappers on unmount */
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
