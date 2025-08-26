"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import classes from "./Tours.module.css";
import slides from "../../../settings/slides";
import MarqueePill from "@/Components/MarqueePill/MarqueePill";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";
import ToursCard from "@/Components/ToursCard/ToursCard";

const Chevron = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Tours() {
  return (
    <section className={classes.container} data-header="dark" id="tours">
      <div className={classes.inner}>
        <div className={classes.headerRow}>
          <div className={classes.headerLeft}>
            <div className={classes.pillWrap}>
              <MarqueePill title="What we offer" />
            </div>
            <AnimatedText>
              <h2 className={classes.title}>
                Tailored Journeys. <br /> Island by Island.
              </h2>
            </AnimatedText>
          </div>

          <div className={classes.headerRight}>
            <a href="/tours" className={classes.viewAll}>
              View All Services
            </a>
            <div className={classes.navBtns}>
              <button className={`${classes.arrow} left`} aria-label="Previous tour card">
                <Chevron />
              </button>
              <button className={`${classes.arrow} right`} aria-label="Next tour card">
                <Chevron />
              </button>
            </div>
          </div>
        </div>

        <div className={classes.slider}>
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: `.left`, nextEl: `.right` }}
            centeredSlides={false}
            loop={false}
            breakpoints={{
              1600: { slidesPerView: 4, spaceBetween: 24, slidesOffsetBefore: 360, slidesOffsetAfter: 0 },
              1200: { slidesPerView: 3, spaceBetween: 24, slidesOffsetBefore: 120, slidesOffsetAfter: 0 },
              768: { slidesPerView: 2, spaceBetween: 20, slidesOffsetBefore: 64, slidesOffsetAfter: 0 },
              0: { slidesPerView: 1.1, spaceBetween: 16, slidesOffsetBefore: 24, slidesOffsetAfter: 0 },
            }}
            className={classes.swiperTours}
          >
            {slides.map((s) => (
              <SwiperSlide key={s.id}>
                <ToursCard tour={s} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
