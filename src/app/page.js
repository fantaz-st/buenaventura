import classes from "./page.module.css";
import Hero from "./Components/Hero2/Hero";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
      </main>
    </div>
  );
}
