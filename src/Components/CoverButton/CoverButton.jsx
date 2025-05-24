import React from "react";
import styles from "./CoverButton.module.css";
import Image from "next/image";

const CoverButton = () => (
  <div className={styles.coverButton}>
    {/* Thumbnail */}
    <div className={styles.thumbnailWrapper}>
      <Image src="/video-poster.png" alt="Hero teaser" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
    </div>

    {/* CTA */}
    <div className={styles.cta}>
      <span className={styles.label}>Discover full video</span>
      <span className={styles.playButton}>
        <svg width="9" height="12" viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.916 6.277 0.85 10.988a.5.5 0 0 1-.518-.093A.452.452 0 0 1 .332 10.71V1.29A.334.334 0 0 1 .665.956c.063 0 .127.02.185.056l7.066 4.711a.334.334 0 0 1 0 .554Z" fill="currentColor" />
        </svg>
      </span>
    </div>
  </div>
);

export default CoverButton;
