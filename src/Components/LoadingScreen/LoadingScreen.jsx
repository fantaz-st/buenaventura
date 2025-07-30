/* LoadingScreen.jsx */
"use client";

import classes from "./LoadingScreen.module.css";
import horizontalLoop from "../../../helpers/horizontalScroll";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function LoadingScreen() {
  const containerRef = useRef(null);

  // now 5 refs, one per marquee
  const trackRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  // store 5 timelines
  const loopRefs = useRef([null, null, null, null, null]);

  useGSAP(
    () => {
      trackRefs.forEach((trackRef, i) => {
        const el = trackRef.current;
        if (!el) return;

        const items = el.querySelectorAll(`.${classes.text}`);
        if (!items.length || loopRefs.current[i]) return;

        const tl = horizontalLoop(items, {
          repeat: -1,
          speed: 3,
          paddingRight: 64,
          // reverse every odd-indexed marquee
          reversed: i % 2 === 1,
        });

        loopRefs.current[i] = tl;
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={classes.container} ref={containerRef}>
      {trackRefs.map((_, i) => (
        <div key={i} className={classes.marqueeWrapper}>
          <div className={classes.marqueeInner} ref={trackRefs[i]}>
            {Array.from({ length: 8 }).map((_, idx) => (
              <h1 key={idx} className={classes.text}>
                LOADING
              </h1>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
