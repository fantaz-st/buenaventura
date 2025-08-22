"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import classes from "./Tours.module.css";
import { toursItems } from "../../settings/toursItems";
import slides from "@/settings/slides";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Tours() {
  const root = useRef(null);

  useGSAP(
    () => {
      const projects = Array.from(root.current.querySelectorAll(`.${classes.project}`));
      if (!projects.length) return;

      gsap.set(projects, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
      gsap.set(projects[0], { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" });

      const tl = gsap.timeline({ paused: true });
      for (let i = 0; i < projects.length - 1; i++) {
        tl.to(projects[i + 1], { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", ease: "none", duration: 1 }, i);
      }

      ScrollTrigger.create({
        animation: tl,
        trigger: root.current,
        start: "top top",
        end: () => `+=${window.innerHeight * (projects.length - 1)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: (v) => Math.round(v * (projects.length - 1)) / (projects.length - 1),
          duration: { min: 0.15, max: 0.45 },
          ease: "power2.out",
          delay: 0,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={classes.wrap}>
      <div className={classes.carousel}>
        {slides.map((item, idx) => (
          <div
            key={item.id ?? idx}
            className={classes.project}
            style={{
              clipPath: idx === 0 ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
          >
            <div className={classes.projectBg}>
              <Image fill src={item.poster} alt={item.description1} sizes="100vw" />
              <div className={classes.heroImgOverlay} />
              <div className={classes.heroImgGradient} />
            </div>

            <div className={classes.projectMain}>
              <Image fill src={item.poster} alt={item.description1} />
            </div>

            <div className={classes.projectHeader}>
              <div className={classes.projectId}>
                <h2>{item.title}</h2>
              </div>
              <div className={classes.projectWhitespace} />
              <div className={classes.projectTitle}>
                <h2>{item.description1}</h2>
              </div>
            </div>

            <div className={classes.projectInfo}>
              <div className={classes.projectUrl}>
                <Link href={item.url}>( {item.type} )</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
