"use client";

import classes from "./BoatFeatures.module.css";
import BoatFeaturesCard from "../../Components/Cards/BoatFeaturesCard/BoatFeaturesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import boatFeatures from "@/settings/boatFeatures";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";

import "swiper/css";
import { useRef } from "react";

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <AnimatedText>
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
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
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

export default BoatFeatures;
