import React from "react";
import classes from "./ToursCard.module.css";
import TheButton from "../TheButton/TheButton";
import Image from "next/image";

const ToursCard = ({ tour }) => (
  <div className={classes.slide} role="group" aria-roledescription="slide">
    <div className={classes.slideContent}>
      {/* <video className={classes.slideVideo} autoPlay loop muted playsInline preload="metadata">
        <source src={tour.video} type="video/mp4" />
      </video> */}
      <div className={classes.imageContainer}>
        <Image src={tour.image} alt={tour.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={classes.image} priority />
      </div>

      <div className={classes.slideText}>
        <h3 className={classes.title}>{tour.title} Tour</h3>
        <p className={classes.description}>{tour.description}</p>
        <div className={classes.footer}>
          <TheButton variant="dark" changeOnSmartphones="false" href={tour.url}>
            Explore
          </TheButton>
          <div className={classes.price}>
            <p>Starting&nbsp;from</p>
            <p className={classes.eur}>{tour.price}€</p>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.grab} />
  </div>
);

export default ToursCard;
