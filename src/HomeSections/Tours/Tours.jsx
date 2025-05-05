"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classes from "./Tours.module.css";
import slides from "../../settings/slides";
import VideoCard from "../../Components/Cards/VideoCard/VideoCard";

import "swiper/css";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const Tours = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* useGSAP(
    () => {
      const splitTitle = new SplitType(`.${classes.title}`, { types: "words", tagName: "span" });
      const splitSub = new SplitType(`.${classes.subTitle}`, { types: "lines", tagName: "span" });

      gsap.set(splitTitle.words, { yPercent: 100, opacity: 0 });
      gsap.set(splitSub.lines, { yPercent: 100, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
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
    { scope: sectionRef }
  ); */

  return (
    <div ref={sectionRef} className={classes.container} data-header='dark'>
      <div className={classes.header}>
        <AnimatedText>
          <h2 className={classes.title}>
            Tailored Journeys.
            <br />
            Island by Island.
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.35}>
          <p className={classes.subTitle}>No two days on the Adriatic should ever be the same. Choose your path — hidden coves, sunlit harbors, secret beaches. We design each journey around you, your pace, your spirit.</p>
        </AnimatedText>
      </div>

      <div className={classes.nav}>
        {slides.map((slide, index) => (
          <button key={slide.id} className={`${classes.navItem} ${activeIndex === index ? classes.active : ""}`} onClick={() => swiperRef.current.slideTo(index)}>
            {slide.type}
          </button>
        ))}
      </div>

      <div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            1600: { slidesPerView: 2.2, spaceBetween: 100 },
            1200: {
              slidesPerView: 2.2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 40,
            },
            360: { slidesPerView: 1.1, spaceBetween: 10 },
          }}
          centeredSlides={true}
          className={classes.swiper}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <VideoCard tour={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tours;
