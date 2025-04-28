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
import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

import "swiper/css";

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
  const container = useRef(null);

  useGSAP(() => {}, { scope: container });

  return (
    <section className={classes.container} ref={container}>
      <SectionHeader
        color='white'
        title='Built for Good Living.'
        subTitle={
          <>
            Comfort you can sink into. Performance that carries you farther. Space designed for shared smiles, spontaneous dives, and long, slow lunches under the sun. <i>Buenaventura</i> isn't just a boat — it's your floating sanctuary.
          </>
        }
      />

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
