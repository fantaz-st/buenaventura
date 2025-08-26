"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import classes from "./MarqueePill.module.css";
import horizontalLoop from "../../../helpers/horizontalScroll";

export default function MarqueePill({ title = "FNTZ" }) {
  const containerRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    const titles = containerRef.current?.querySelectorAll(`.${classes.title}`) || [];
    if (!loopRef.current && titles.length) {
      loopRef.current = horizontalLoop(titles, { repeat: -1, speed: 0.3, paddingRight: 8 });
    }
    return () => {
      loopRef.current && loopRef.current.kill && loopRef.current.kill();
      loopRef.current = null;
    };
  }, [title]);

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.inner}>
        <div className={classes.marqueeWrapper}>
          <div className={classes.marqueeInner}>
            {Array.from({ length: 10 }).map((_, i) => (
              <p className={classes.title} key={i}>
                {title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
