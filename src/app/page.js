import Hero from "./Components/Hero/Hero";
import MoreThanTour from "./Components/MoreThanTour/MoreThanTour";
import Tours from "./Components/Tours/Tours";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
        <MoreThanTour />
        <Tours />
      </main>
    </div>
  );
}
