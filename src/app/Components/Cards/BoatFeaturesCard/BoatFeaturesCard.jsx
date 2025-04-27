import Image from "next/image";
import classes from "./BoatFeaturesCard.module.css";

const BoatFeaturesCard = ({ image }) => {
  return (
    <figure className={classes.feature} role='group' aria-roledescription='slide' aria-label={`Rebelde boats feature image  describing ${image.title}`}>
      <div className={classes.imageWrapper}>
        <Image src={image.src} alt={image.alt} fill className={classes.image} />
      </div>

      <div className={classes.footerContent}>
        <h2 className={classes.title}>{image.title}</h2>
        <h2 className={classes.subTitle}>{image.subTitle}</h2>
        <div className={classes.footerOverlay} />
      </div>
    </figure>
  );
};

export default BoatFeaturesCard;
