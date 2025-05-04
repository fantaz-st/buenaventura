import Image from "next/image";
import classes from "./BoatFeaturesCard.module.css";

const BoatFeaturesCard = ({ feature }) => {
  return (
    <figure className={classes.feature} role='group' aria-roledescription='slide' aria-label={`Rebelde boats feature image  describing ${feature.title}`}>
      <div className={classes.imageWrapper}>
        <Image src={feature.src} alt={feature.alt} fill className={classes.image} />
      </div>
      <h1 className={classes.title}>{feature.title}</h1>
    </figure>
  );
};

export default BoatFeaturesCard;
