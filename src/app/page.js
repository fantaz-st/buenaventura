import Hero from "./Components/Hero/Hero";

import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Hero />
      </main>
    </div>
  );
}
