import React from "react";
import classes from "./VideoCard.module.css";
import TheButton from "../../TheButton/TheButton";

const VideoCard = ({ tour }) => (
  <div className={classes.slide} role='group' aria-roledescription='slide'>
    <div className={classes.slideContent}>
      <video className={classes.slideVideo} autoPlay loop muted playsInline>
        <source src={tour.video} type='video/mp4' />
      </video>

      <div className={classes.slideText}>
        <h3 className={classes.title}>{tour.title}</h3>
        <div className={classes.description}>
          <p>{tour.description1}</p>
          <p>{tour.description2}</p>
        </div>
        <div className={classes.footer}>
          <TheButton variant='lite' changeOnSmartphones='true'>
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

export default VideoCard;
