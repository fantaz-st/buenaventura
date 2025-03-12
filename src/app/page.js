import classes from "./page.module.css";
import Hero from "./Components/Hero2/Hero";
import ToursCards from "./Components/ToursCards/ToursCards";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <section className={classes.first}>
          <Hero />
          <ToursCards />
        </section>
      </main>
    </div>
  );
}
