"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./Tours.module.css";
import slides from "../../settings/slides";
import VideoCard from "../../Components/Cards/VideoCard/VideoCard";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";

const Chevron = () => {
  return (
    <svg width='800px' height='800px' viewBox='0 0 16 16' id='svg2' version='1.1'>
      <g id='layer1' transform='rotate(45 1254.793 524.438)'>
        <path d='M11.532 1048.341H9.536v-9h-9v-2h11z' id='path4179' />
      </g>
    </svg>
  );
};

const Tours = () => {
  return (
    <div className={classes.container} data-header='dark'>
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

      <div>
        <Swiper
          slidesOffsetBefore={80} // 5 rem → 5×16px = 80px
          slidesOffsetAfter={80}
          breakpoints={{
            /*  1600: { slidesPerView: 1.5, spaceBetween: 30 },
            1200: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            }, */
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
              slidesOffsetBefore: 50,
              slidesOffsetAfter: 50,
            },
            360: { slidesPerView: 1.1, spaceBetween: 10, slidesOffsetBefore: 10, slidesOffsetAfter: 10 },
          }}
          modules={[Navigation]}
          centeredSlides={false}
          className={classes.swiperTours}
          wrapperClass={classes.wrapper}
          navigation={{
            prevEl: `.left`,
            nextEl: `.right`,
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <VideoCard tour={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={classes.navigation}>
          <button className={`${classes.arrow} ${classes.left} left`} aria-label='Previous slide'>
            <Chevron aria-hidden='true' />
          </button>
          <button className={`${classes.arrow} ${classes.right} right`} aria-label='Next slide'>
            <Chevron aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tours;

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
