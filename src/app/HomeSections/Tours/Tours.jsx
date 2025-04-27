"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classes from "./Tours.module.css";
import slides from "../../settings/slides";
import VideoCard from "../../Components/Cards/VideoCard/VideoCard";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const Tours = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {}, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={classes.container} data-header='dark'>
      <div className={classes.text}>
        <h1>
          Tailored Journeys.
          <br />
          Island by Island.
        </h1>
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
