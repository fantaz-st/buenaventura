import classes from "./TestimonialCard.module.css";
import Image from "next/image";

const TestimonialCard = ({ t }) => {
  return (
    <figure className={classes.testimonial} aria-label={`Testimonial by ${t.name}: ${t.title}`}>
      <div className={classes.imageContainer}>
        <Image src={t.image} alt={t.name} fill sizes='(min-width: 1160px) calc(33.32vw - 42px), 314px' className={`${classes.image} testImage`} />
      </div>

      <div className={classes.footerContent}>
        <div className={`${classes.stars} ${classes.top}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={classes.star} width='16' height='16' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          ))}
        </div>

        <h2 className={classes.title}>{t.title}</h2>
        <p className={classes.text}>&quot;{t.text}&quot;</p>
        <div className={classes.bottom}>
          <p className={classes.name}>{t.name}</p>

          <div className={classes.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className={classes.star} width='16' height='16' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
              </svg>
            ))}
          </div>
        </div>

        <div className={classes.footerOverlay} />
      </div>
    </figure>
  );
};

export default TestimonialCard;
