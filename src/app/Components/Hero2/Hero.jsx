import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={`${classes.inner} container-xxl`}>
        <div className={classes.text}>
          {/* <svg width='323' height='19' viewBox='0 0 323 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M33.1252 9.09322L27.2356 4.48305H19.6058L15.1886 1.5H10.6375L15.1886 6.24576L13.4485 9.09322M33.1252 9.09322H48.3846C45.5737 11.8955 38.399 17.5 32.1882 17.5C25.9773 17.5 8.8082 17.5 1 17.5L3.59074 14.1102M33.1252 9.09322H13.4485M13.4485 9.09322H7.42503L3.59074 14.1102M3.59074 14.1102H27.2356'
              stroke='#072434'
              strokeWidth='2'
              strokeLinejoin='round'
            />
            <path d='M56.3845 17.5C60.3845 17.5 60.3845 14.5 64.3845 14.5C68.3845 14.5 68.3845 17.5 72.3845 17.5C76.3845 17.5 76.3845 14.5 80.3845 14.5C84.3845 14.5 84.3845 17.5 88.3845 17.5' stroke='#072434' strokeWidth='2' />
            <path d='M88.3845 17.5C92.3845 17.5 92.3845 14.5 96.3845 14.5C100.385 14.5 100.385 17.5 104.385 17.5C108.385 17.5 108.385 14.5 112.385 14.5C116.385 14.5 116.385 17.5 120.385 17.5' stroke='#072434' strokeWidth='2' />
            <path d='M120.385 17.5C124.385 17.5 124.385 14.5 128.385 14.5C132.385 14.5 132.385 17.5 136.385 17.5C140.385 17.5 140.385 14.5 144.385 14.5C148.385 14.5 148.385 17.5 152.385 17.5' stroke='#072434' strokeWidth='2' />
            <path d='M152.385 17.5C156.385 17.5 156.385 14.5 160.385 14.5C164.385 14.5 164.385 17.5 168.385 17.5C172.385 17.5 172.385 14.5 176.385 14.5C180.385 14.5 180.385 17.5 184.385 17.5' stroke='#072434' strokeWidth='2' />
            <path d='M184.385 17.5C188.385 17.5 188.385 14.5 192.385 14.5C196.385 14.5 196.385 17.5 200.385 17.5C204.385 17.5 204.385 14.5 208.385 14.5C212.385 14.5 212.385 17.5 216.385 17.5' stroke='#072434' strokeWidth='2' />
            <path d='M216.385 17.5C220.385 17.5 220.385 14.5 224.385 14.5C228.385 14.5 228.385 17.5 232.385 17.5C236.385 17.5 236.385 14.5 240.385 14.5C244.385 14.5 244.385 17.5 248.385 17.5' stroke='#072434' strokeWidth='2' />
            <path d='M267.385 12.5L256.385 17.5H321.385L313.885 9L299.885 6L292.385 1.5L279.385 3.5L273.385 5.5L267.385 12.5Z' stroke='#072434' strokeWidth='2' strokeLinejoin='round' />
          </svg> */}
          <h1>Rebelde boats</h1>
          <div className={classes.trip}>
            <p>5.0</p>
            <div className={classes.stars}>
              {[...Array(5)].map((_, index) => (
                <svg key={index} fill='#FFD700' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z' />
                </svg>
              ))}
            </div>
            <p>31 reviews</p>
          </div>
          <p>Experience the beauty of the Adriatic Sea with our top-of-the-line vessel, perfect for exploring hidden coves, stunning islands, and pristine beaches.</p>
        </div>
        <div className={classes.image}>
          <div className={classes.imageContainer}>
            <Image src='/assets/images/hero-boat.jpg' alt='Rebelde boats Buenaventura boat from above' fill className={classes.heroImage} />
          </div>
          {/* <div className={classes.smallImageContainer}>
            <Image src='/assets/images/90.jpg' alt='Rebelde boats Buenaventura guests on deck' fill className={classes.guestsImage} />
          </div> */}
          <div className={classes.playButton}>
            <svg viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <title>play</title> <path d='M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z'></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
