import Image from "next/image";
import classes from "./BoatFeaturesCard.module.css";

const BoatFeaturesCard = ({ feature }) => {
  return (
    <figure className={classes.feature} role='group' aria-roledescription='slide' aria-label={`Rebelde boats feature image  describing ${feature.title}`}>
      <div className={classes.imageWrapper}>
        <Image
          src={feature.src}
          alt={feature.alt}
          fill
          className={classes.image}
          sizes='(min-width: 2220px) calc(74.87vw - 139px), (min-width: 2100px) calc(165vw - 2123px), (min-width: 1200px) calc(66.7vw - 44px), (min-width: 800px) calc(102.11vw - 182px), (min-width: 660px) calc(170vw + 227px), (min-width: 440px) 171vw, (min-width: 340px) calc(93.75vw + 320px), 563px'
        />
      </div>
      <h3 className={classes.title}>{feature.title}</h3>
    </figure>
  );
};

export default BoatFeaturesCard;
