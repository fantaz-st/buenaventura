"use client";

import classes from "./BoatFeatures.module.css";
import BoatFeaturesCard from "../../Components/Cards/BoatFeaturesCard/BoatFeaturesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import boatFeatures from "@/settings/boatFeatures";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";

import "swiper/css";

const Chevron = () => {
  return (
    <svg width='800px' height='800px' viewBox='0 0 16 16' id='svg2' version='1.1'>
      <g id='layer1' transform='rotate(45 1254.793 524.438)'>
        <path d='M11.532 1048.341H9.536v-9h-9v-2h11z' id='path4179' />
      </g>
    </svg>
  );
};

const BoatFeatures = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <AnimatedText animateOnScroll={false} delay={1.5}>
          <h2 className={classes.title}>Built for Good Living.</h2>
        </AnimatedText>
        <AnimatedText>
          <p className={classes.subTitle}>
            Comfort you can sink into. Performance that carries you farther. Space designed for shared smiles, spontaneous dives, and long, slow lunches under the sun. <i>Buenaventura</i> isn&apos;t just a boat — it&apos;s your floating sanctuary.
          </p>
        </AnimatedText>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.left`,
          nextEl: `.right`,
        }}
        breakpoints={{
          1600: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 16,
          },
          360: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
        }}
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
        <button className={`${classes.arrow} ${classes.left} left`} aria-label='Previous slide'>
          <Chevron aria-hidden='true' />
        </button>
        <button className={`${classes.arrow} ${classes.right} right`} aria-label='Next slide'>
          <Chevron aria-hidden='true' />
        </button>
      </div>
    </section>
  );
};

export default BoatFeatures;
