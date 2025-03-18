import Hero from "./Components/Hero/Hero";
import MoreThanTour from "./Components/MoreThanTour/MoreThanTour";
import TheBoat from "./Components/TheBoat/TheBoat";
import Tours from "./Components/Tours/Tours";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
        <MoreThanTour />
        <Tours />
        <TheBoat />
        <div style={{ height: "100vh" }}></div>
      </main>
    </div>
  );
}
