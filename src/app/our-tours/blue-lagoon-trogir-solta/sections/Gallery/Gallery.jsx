"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";
import "swiper/css";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import classes from "./Gallery.module.css";
import galleryImages from "./galleryImages";

// ⬇️ Load the map client-side only (avoid SSR "window is not defined")
const TourMap = dynamic(() => import("../TourMap/TourMap"), {
  ssr: false,
  loading: () => <div className={classes.mapFallback} aria-hidden="true" />,
});

const tabs = [
  { key: "photos", label: "Photos", icon: "📷" },
  { key: "map", label: "Map", icon: "🗺️" },
  { key: "video", label: "Video", icon: "🎬", disabled: true },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const swiperRef = useRef(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      groupAll: true,
      animated: true,
      dragToClose: true,
      compact: false,
      Thumbs: false,
      Toolbar: {
        display: { left: [], middle: [], right: ["zoom", "slideshow", "fullscreen", "close"] },
      },
      Images: { zoom: true },
      Carousel: { infinite: false },
    });
    return () => Fancybox.destroy();
  }, []);

  // Block lightbox click if the user was dragging the slider
  const handleAnchorClick = (e) => {
    if (swiperRef.current && swiperRef.current.allowClick === false) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className={classes.container} aria-labelledby="media-heading">
      <div className={classes.headerRow}>
        <h2 id="media-heading" className={classes.title}>
          Media
        </h2>

        <div className={classes.tabs} role="tablist" aria-label="Media types">
          {tabs.map((t) => {
            const selected = activeTab === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={selected ? "true" : "false"}
                aria-controls={`panel-${t.key}`}
                id={`tab-${t.key}`}
                className={`${classes.tab} ${selected ? classes.tabActive : ""}`}
                type="button"
                disabled={t.disabled}
                onClick={() => !t.disabled && setActiveTab(t.key)}
                title={t.label}
              >
                <span className={classes.tabIcon} aria-hidden="true">
                  {t.icon}
                </span>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* PHOTOS PANEL */}
      {activeTab === "photos" && (
        <div id="panel-photos" role="tabpanel" aria-labelledby="tab-photos" className={classes.carousel}>
          <Swiper
            modules={[Keyboard, A11y]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            keyboard={{ enabled: true }}
            centeredSlides
            slidesPerView="auto"
            spaceBetween={24}
            speed={550}
            loop
            watchSlidesProgress
            preventClicks
            preventClicksPropagation={false}
            threshold={6}
            className={classes.swiper}
            breakpoints={{
              0: { spaceBetween: 16 },
              768: { spaceBetween: 20 },
              1200: { spaceBetween: 24 },
            }}
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={img.id} className={classes.slide}>
                <figure className={classes.figure}>
                  <div className={classes.imageWrap}>
                    <a href={img.src} data-fancybox="gallery" data-caption={img.title} className={classes.imageLink} onClick={handleAnchorClick}>
                      <Image src={img.src} alt={img.title} fill sizes="(max-width:768px) 92vw, (max-width:1200px) 70vw, 980px" className={classes.image} priority={i === 0} />
                    </a>
                    <div className={classes.fade} />
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* MAP PANEL */}
      {activeTab === "map" && (
        <div id="panel-map" role="tabpanel" aria-labelledby="tab-map" className={classes.mapPanel}>
          <div className={classes.mapCard}>
            <TourMap />
          </div>
        </div>
      )}
    </section>
  );
}
