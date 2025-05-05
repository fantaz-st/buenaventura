import React from "react";
import classes from "./VideoCard.module.css";
import TheButton from "../../TheButton/TheButton";

const VideoCard = ({ tour }) => {
  return (
    <div className={classes.slide} role='group' aria-roledescription='slide'>
      <div className={classes.slideContent}>
        <video className={classes.slideVideo} autoPlay loop muted playsInline aria-labelledby='Safety'>
          <source src={tour.video} type='video/mp4' />
        </video>

        <div className={classes.slideText}>
          <h3>{tour.title}</h3>
          <TheButton variant='lite'>Explore</TheButton>
        </div>
      </div>
      <div className={classes.grab}></div>
      <div className={classes.description}>
        <p>{tour.description1}</p>
        <p>{tour.description2}</p>
      </div>
    </div>
  );
};

export default VideoCard;
