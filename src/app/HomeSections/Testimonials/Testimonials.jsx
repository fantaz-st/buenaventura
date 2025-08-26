"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import testimonials from "@/settings/testimonials";
import TheButton from "@/Components/TheButton/TheButton";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";
import MarqueePill from "@/Components/MarqueePill/MarqueePill";
import classes from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const root = useRef(null);
  const pinRef = useRef(null);

  useGSAP(
    () => {
      const wrap = root.current;
      const pin = pinRef.current;
      const inner = wrap.querySelector(`.${classes.inner}`);
      const viewport = wrap.querySelector(`.${classes.viewport}`);
      const list = wrap.querySelector(`.${classes.list}`);
      const getDelta = () => Math.max(0, list.scrollHeight - viewport.clientHeight);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: pin,
            start: "bottom top",
            end: () => `+=${getDelta()}`,
            pin: inner,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(list, { y: 0 }, { y: () => -getDelta(), ease: "none" });
    },
    { scope: root }
  );

  return (
    <section className={classes.container} ref={root}>
      <div className={classes.inner}>
        <div className={classes.header} ref={pinRef}>
          <MarqueePill title="Testimonials" />
          <AnimatedText>
            <h2 className={classes.title}>Good Times Travel Far.</h2>
          </AnimatedText>
        </div>

        <div className={classes.flex}>
          <div className={classes.left}>
            <div className={classes.viewport}>
              <div className={classes.list}>
                {testimonials.map((t) => (
                  <article key={t.id} className={classes.card}>
                    <h3 className={classes.cardTitle}>{t.title}</h3>
                    <p className={classes.quote}>&ldquo;{t.text}&rdquo;</p>
                    <div className={classes.meta}>
                      <div className={classes.name}>{t.name}</div>
                      <div className={classes.stars}>★★★★★</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className={classes.right}>
            <div className={classes.media}>
              <Image className={classes.image} src="/assets/images/boat/testimonials Felix 37.jpg" alt="Happy guests on our boat" fill sizes="45vw" />
              <div className={classes.badge}>
                <div className={classes.score}>5.0</div>
                <div className={classes.avatars}>
                  <Image src="/assets/images/testimonials/avatar-1.jpg" alt="Avatar 1" width={50} height={50} className={classes.avatar} />
                  <Image src="/assets/images/testimonials/avatar-2.jpg" alt="Avatar 2" width={50} height={50} className={classes.avatar} />
                  <Image src="/assets/images/testimonials/avatar-3.jpg" alt="Avatar 3" width={50} height={50} className={classes.avatar} />
                </div>
                <div className={classes.badgeStars}>★★★★★</div>
                <p className={classes.badgeNote}>200+ satisfied guests</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.buttonWrap}>
          <TheButton variant="dark" href="https://www.tripadvisor.com/Attraction_Review-g295370-d28042808-Reviews-Rebelde_Boats-Split_Split_Dalmatia_County_Dalmatia.html">
            Read more Testimonials
          </TheButton>
        </div>
      </div>
    </section>
  );
}
