"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classes from "./Itinerary.module.css";

const itinerary = [
  {
    badge: "DEPARTURE",
    title: "Split — Boarding & Briefing",
    desc: "Step aboard on Split Riva and meet your skipper. A short safety brief, then we idle past the palace walls and open the throttles toward Šolta.",
    location: "Split, Croatia",
    img: "/assets/images/tours/lagoon/map/split.jpg",
    alt: "Split waterfront",
  },
  {
    badge: "SWIM STOP",
    title: "Nečujam — Quiet Bay",
    desc: "Sheltered, clear and calm—perfect for the first swim. Mask up, float a while, and let the day slow down.",
    location: "Nečujam, Šolta",
    img: "/assets/images/tours/lagoon/map/necujam.jpg",
    alt: "Nečujam bay",
  },
  {
    badge: "SNORKEL",
    title: "Blue Lagoon — Turquoise Shallows",
    desc: "Anchor over powder-blue sand in the famous lagoon. Easy snorkeling, shallow water, and time to sunbathe or grab a cold drink nearby.",
    location: "Krknjaši (Blue Lagoon)",
    img: "/assets/images/tours/lagoon/map/lagoon.jpg",
    alt: "Blue Lagoon",
  },
  {
    badge: "WANDER",
    title: "Trogir — UNESCO Old Town",
    desc: "Step ashore inside UNESCO-listed walls. Wander narrow lanes, linger in little squares, and pause for gelato or an espresso.",
    location: "Trogir, Croatia",
    img: "/assets/images/tours/lagoon/map/trogir.jpg",
    alt: "Trogir old town",
  },
  {
    badge: "RETURN",
    title: "Back to Split — Golden Hour",
    desc: "We cruise home along the coast as the light softens and the sea turns gold. Back on Split Riva, rested and sun-warmed.",
    location: "Split Riva",
    img: "/assets/images/tours/lagoon/map/split.jpg",
    alt: "Split Riva promenade",
  },
];

export default function Itinerary() {
  const container = useRef(null);
  const FADE_START = 0.9; // 0 = odma, 0.35 = 35% pina
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const wrappers = gsap.utils.toArray(`.${classes.cardWrapper}`);
      wrappers.forEach((wrapper, idx) => {
        const card = wrapper.querySelector(`.${classes.card}`);
        const isLast = idx === wrappers.length - 1;

        if (isLast) {
          gsap.set(card, { opacity: 1, scale: 1 });
          return;
        }

        gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top 10%",
              end: "bottom 20%",
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          })
          .set(card, { opacity: 1, scale: 1 })
          .to(card, { opacity: 0, scale: 0.8, ease: "none", duration: 1 });
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: container }
  );

  return (
    <section className={classes.container} ref={container}>
      <header className={classes.intro}>
        <h2>Itinerary</h2>
      </header>

      <div className={classes.cardsContainer}>
        {itinerary.map((step, i) => (
          <div key={i} className={classes.cardWrapper}>
            <article className={classes.card} aria-label={step.title}>
              <div className={classes.media}>
                <Image src={step.img} alt={step.alt} fill sizes="(max-width: 900px) 100vw, 1100px" priority={i === 0} />
              </div>

              <div className={classes.panel}>
                <span className={classes.badge}>{step.badge}</span>
                <h3 className={classes.panelTitle}>{step.title}</h3>
                <div className={classes.rule} />
                <p className={classes.panelDesc}>{step.desc}</p>

                <div className={classes.meta} aria-label={`Location: ${step.location}`}>
                  <svg className={classes.pinIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  <strong>{step.location}</strong>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <footer className={classes.outro}>
        <h3>Make it yours</h3>
        <p>Want lunch in a quiet bay or extra swim time? Tell us what feels right — we’ll shape the day around you.</p>
      </footer>
    </section>
  );
}
