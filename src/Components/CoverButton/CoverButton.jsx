import React from "react";
import styles from "./CoverButton.module.css";

const CoverButton = () => (
  <div className={styles.coverButton}>
    {/* Thumbnail */}
    <div className={styles.thumbnailWrapper}>
      <figure className={styles.thumbnail}>
        <img
          src="https://quechua-lookbook.com/ss25/wp-content/uploads/2025/01/Image-tracking-1-480x302.jpg"
          srcSet="
            https://quechua-lookbook.com/ss25/wp-content/uploads/2025/01/Image-tracking-1-480x302.jpg 480w,
            https://quechua-lookbook.com/ss25/wp-content/uploads/2025/01/Image-tracking-1-768x484.jpg 768w,
            https://quechua-lookbook.com/ss25/wp-content/uploads/2025/01/Image-tracking-1-1200x756.jpg 1200w,
            https://quechua-lookbook.com/ss25/wp-content/uploads/2025/01/Image-tracking-1.jpg 1600w,
            https://quechua-lookbook.com/ss25/wp-content/uploads/2025/01/Image-tracking-1.jpg 1920w"
          sizes="(max-width: 1023px) 100vw, 10vw"
          alt="Hero-teaser"
        />
      </figure>
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
