import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.description}>
          <h2>Tour description</h2>
          <p>
            Step aboard for a half-day escape designed for those who want to make the most of their time on the Adriatic without ever feeling rushed. Glide across the sea to the Blue Lagoon, where turquoise waters invite you to swim and unwind in complete privacy. Wander through the timeless streets
            of UNESCO-listed Trogir, before discovering the unspoiled bays and tranquil charm of Šolta Island.
          </p>

          <p>This tour is crafted for those who value moments over checklists — a chance to slow down, share the day with the people you love, and embrace the effortless elegance of life on the water.</p>
        </div>
        <div className={classes.details}>
          <h3>Key Details</h3>
          <ul>
            <li>
              <span>Tour type:</span> Half-day private speedboat tour
            </li>
            <li>
              <span>Duration:</span> ~5 hours (morning or afternoon departures)
            </li>
            <li>
              <span>Destinations:</span> Blue Lagoon • Trogir (UNESCO) • hidden bays of Šolta
            </li>
            <li>
              <span>Departure point:</span> Split Riva (waterfront promenade)
            </li>
            <li>
              <span>Capacity:</span> 6–12 guests (depending on boat)
            </li>
            <li>
              <span>Included:</span> Private boat & skipper • Fuel • Bottled water • Safety gear • Snorkeling masks
            </li>
            <li>
              <span>Price:</span> From 700 € per boat
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
