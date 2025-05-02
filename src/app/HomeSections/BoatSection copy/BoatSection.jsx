"use client";

import classes from "./BoatSection.module.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import BoatFeaturesCard from "../../Components/Cards/BoatFeaturesCard/BoatFeaturesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import boatFeatures from "@/app/settings/boatFeatures";

import "swiper/css";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Chevron = () => {
  return (
    <svg width='800px' height='800px' viewBox='0 0 16 16' id='svg2' version='1.1'>
      <g id='layer1' transform='rotate(45 1254.793 524.438)'>
        <path d='M11.532 1048.341H9.536v-9h-9v-2h11z' id='path4179' />
      </g>
    </svg>
  );
};

const BoatSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const splitTitle = new SplitType(`.${classes.title}`, { types: "words", tagName: "span" });
      const splitSub = new SplitType(`.${classes.subTitle}`, { types: "lines", tagName: "span" });

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
    },
    { scope: containerRef }
  );

  return (
    <section className={classes.container} ref={containerRef}>
      <div className={classes.header}>
        <h1 className={classes.title}>Built for Good Living.</h1>
        <p className={classes.subTitle}>
          Comfort you can sink into. Performance that carries you farther. Space designed for shared smiles, spontaneous dives, and long, slow lunches under the sun. <i>Buenaventura</i> isn&apos;t just a boat — it&apos;s your floating sanctuary.
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${classes.left}`,
          nextEl: `.${classes.right}`,
        }}
        breakpoints={{
          1600: {
            slidesPerView: 4.2,
            spaceBetween: 20,
            slidesOffsetBefore: -300,
            slidesOffsetAfter: 300,
          },
          1200: {
            slidesPerView: 3.2,
            spaceBetween: 20,
            slidesOffsetBefore: -50,
            slidesOffsetAfter: 50,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            slidesOffsetBefore: -40,
            slidesOffsetAfter: 40,
          },
          360: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            slidesOffsetBefore: -20,
            slidesOffsetAfter: 20,
          },
        }}
        centeredSlides
        slideToClickedSlide
        watchOverflow={false}
        grabCursor
        className={classes.swiper}
      >
        {boatFeatures.map((feature) => (
          <SwiperSlide key={feature.id}>
            <BoatFeaturesCard feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.navigation}>
        <button className={`${classes.arrow} ${classes.left}`} aria-label='Previous slide'>
          <Chevron aria-hidden='true' />
        </button>
        <button className={`${classes.arrow} ${classes.right}`} aria-label='Next slide'>
          <Chevron aria-hidden='true' />
        </button>
      </div>
    </section>
  );
};

export default BoatSection;
