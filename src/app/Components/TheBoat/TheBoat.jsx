import Image from "next/image";
import classes from "./TheBoat.module.css";

const TheBoat = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <div className={classes.title}>
          <h1>about our</h1>
          <h1 className={classes.rotated}>speedboat</h1>
        </div>

        <div className={classes.description}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, odit expedita doloremque aliquid est tempore corrupti perspiciatis veniam ratione saepe accusantium quibusdam non, nobis quia, odio explicabo modi. Aspernatur, inventore?</p>
        </div>
      </div>

      <div className={classes.info}>
        <div className={classes.inner}>
          <div className={classes.infoText}>
            <p>Model</p>
            <h4>Felix 37</h4>
          </div>
          <div className={classes.infoText}>
            <p>length</p>
            <h4>12m</h4>
          </div>
          <div className={classes.infoText}>
            <p>Width</p>
            <h4>3.5m</h4>
          </div>
          <div className={classes.infoText}>
            <p>Engine HP</p>
            <h4>500</h4>
          </div>
          <div className={classes.infoText}>
            <p>Max Speed</p>
            <h4>30kn</h4>
          </div>
          <div className={`${classes.divider1} ${classes.divider}`}></div>
          <div className={`${classes.divider2} ${classes.divider}`}></div>
          <div className={`${classes.divider3} ${classes.divider}`}></div>
          <div className={`${classes.divider4} ${classes.divider}`}></div>
        </div>
      </div>

      <Image src='/assets/images/theboat.jpg' alt='Rebelde boats about the boat photo' fill className={classes.image} sizes='100vw' />
    </div>
  );
};

export default TheBoat;
