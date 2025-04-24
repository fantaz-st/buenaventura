import classes from "./SingleTestimonial.module.css";
import Image from "next/image";

const SingleTestimonial = ({ t }) => {
  return (
    <figure className={classes.testimonial} tabIndex={0} aria-label={`Testimonial by ${t.name}: ${t.title}`}>
      <div className={classes.imageContainer}>
        <Image src={t.image} alt={t.name} fill className={classes.image} />
      </div>

      <div className={classes.footerContent}>
        <div className={classes.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={classes.star} width='16' height='16' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          ))}
        </div>

        <h2 className={classes.title}>{t.title}</h2>
        <p className={classes.text}>{t.text}</p>
        <p className={classes.name}>{t.name}</p>
        <div className={classes.footerOverlay} />
      </div>
    </figure>
  );
};

export default SingleTestimonial;
