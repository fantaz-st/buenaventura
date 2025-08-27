import Image from "next/image";
import classes from "./Hero.module.css";
// TourIcons.jsx
// TourIcons.jsx
const iconCommon = (size, strokeWidth, p) => ({
  width: size,
  height: size,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...p,
});

// 💶 Price / Starting from
export const IconPrice = ({ size = 64, strokeWidth = 2.5, ...p }) => (
  <svg {...iconCommon(size, strokeWidth, p)}>
    <path d="M16 12h24a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4z" />
    <path d="M24 20h16M24 28h16M24 36h10" />
  </svg>
);

// 🛥️ Departure & Arrival
export const IconDepartureArrival = ({ size = 64, strokeWidth = 2.5, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...p}>
    {/* Boat hull */}
    <path d="M16 40h32l-4 6H20l-4-6Z" />
    {/* Forward arrow */}
    <path d="M10 24h20M26 18l4 6-4 6" />
    {/* Return arrow */}
    <path d="M54 24H34M38 18l-4 6 4 6" />
  </svg>
);

// 📍 Meeting Point
export const IconMeetingPoint = ({ size = 64, strokeWidth = 2.5, ...p }) => (
  <svg {...iconCommon(size, strokeWidth, p)}>
    <path d="M32 56s-14-12-14-24a14 14 0 1 1 28 0c0 12-14 24-14 24Z" />
    <circle cx="32" cy="32" r="5" />
  </svg>
);

// 👥 Group / Capacity
export const IconGroupOnBoat = ({ size = 64, strokeWidth = 2.5, ...p }) => (
  <svg {...iconCommon(size, strokeWidth, p)}>
    <path d="M8 46h48l-6 6H14l-6-6Z" />
    <circle cx="22" cy="30" r="4" />
    <circle cx="42" cy="30" r="4" />
    <circle cx="32" cy="26" r="5" />
    <path d="M18 44c0-6 4-10 10-10M46 44c0-6-4-10-10-10M26 44c0-6 2-10 6-10M38 44c0-6-2-10-6-10" />
  </svg>
);

// 🌅 Tour Type (Half/Full Day)
export const IconTourType = ({ size = 64, strokeWidth = 2.5, ...p }) => (
  <svg {...iconCommon(size, strokeWidth, p)}>
    <path d="M8 44h48" />
    <circle cx="32" cy="32" r="10" />
    <path d="M32 14v4M32 46v4M14 32h4M46 32h4M20 20l3 3M44 20l-3 3M20 44l3-3M44 44l-3-3" />
  </svg>
);

const tourInfo = {
  location: "Blue Lagoon • Trogir • Čiovo • Šolta",
  title: "Blue Lagoon, Trogir & Šolta",
  priceFrom: "700€",
  departReturn: "09:00–18:00",
  meetingPoint: "Split Riva",
  capacity: "12 persons",
  included: "Private boat & skipper, fuel, safety gear, bottled water, snorkeling masks",
  image: "/assets/images/tours/lagoon/krknjasi-2.jpg",
  type: "Half day /\u200B Full day",
};

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.destinations}>
          <Image src="/assets/icons/pin.svg" alt="Location" width={20} height={20} />
          <p>{tourInfo.location}</p>
        </div>
        <h1 className={classes.title}>{tourInfo.title}</h1>
      </div>

      <div className={classes.icons}>
        <div className={classes.icon}>
          <div className={classes.iconImage}>
            <IconPrice />
          </div>
          <div className={classes.iconText}>
            <p>Price</p>
            <p>{tourInfo.priceFrom}</p>
          </div>
        </div>

        <div className={classes.icon}>
          <div className={classes.iconImage}>
            <IconDepartureArrival />
          </div>
          <div className={classes.iconText}>
            <p>Depart & return</p>
            <p>{tourInfo.departReturn}</p>
          </div>
        </div>

        <div className={classes.icon}>
          <div className={classes.iconImage}>
            <IconMeetingPoint />
          </div>
          <div className={classes.iconText}>
            <p>Meeting point</p>
            <p>{tourInfo.meetingPoint}</p>
          </div>
        </div>

        <div className={classes.icon}>
          <div className={classes.iconImage}>
            <IconGroupOnBoat />
          </div>
          <div className={classes.iconText}>
            <p>Capacity</p>
            <p>{tourInfo.capacity}</p>
          </div>
        </div>

        <div className={classes.icon}>
          <div className={classes.iconImage}>
            <IconTourType />
          </div>
          <div className={classes.iconText}>
            <p>Tour Type</p>
            <p>{tourInfo.type}</p>
          </div>
        </div>
      </div>

      <div className={classes.imageWrapper}>
        <Image src={tourInfo.image} alt={tourInfo.title} fill className={classes.image} sizes="100vw" priority />
      </div>
    </div>
  );
};

export default Hero;
