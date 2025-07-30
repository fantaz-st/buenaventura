"use client";

import classes from "./AboutUs.module.css";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";

const AboutUs = () => {
  return (
    <div className={classes.container} data-header="dark">
      <div className={classes.inner}>
        <AnimatedText animateOnScroll={true} className={classes.title}>
          <h2>
            We believe in living fully — feeling the salt in your hair, the sun on your face, and good company by your side. We craft experiences where the sea is a companion, not a destination. For laughter that carries over open water, and days you never want to end. Every journey is personal.
            Every wave, a new memory.
          </h2>
        </AnimatedText>
      </div>
    </div>
  );
};

export default AboutUs;
