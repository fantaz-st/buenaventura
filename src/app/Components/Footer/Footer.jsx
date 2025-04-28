import Link from "next/link";
import classes from "./Footer.module.css";
import AnimatedLink from "../AnimatedLink/AnimatedLink";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.company}>
          <div className={classes.logo}>
            <Link href='/' aria-label='Rebelde boats home'>
              <h1>
                Rebelde
                <br />
                boats
              </h1>
            </Link>
          </div>
          <p>REBELDE d.o.o.</p>
          <p>OIB 99723002621</p>
          <p>VINKOVAČKA 45, 21000 SPLIT</p>
        </div>
        <nav className={classes.nav}>
          {["Home", "Our Boat", "Our Tours", "FAQ", "Contact"].map((item) => (
            <div key={item} className={classes.navItem}>
              <AnimatedLink href={`#${item.toLowerCase().replace(/ /g, "-")}`}>{item}</AnimatedLink>
            </div>
          ))}
        </nav>
        <div className={classes.madeBy}>
          <p>Copyright © 2025 Rebelde boats - All Rights Reserved</p>
          <p>
            designed & developed <a href='mailto:fantaz@outlook.com'>by fantaz</a>
          </p>
        </div>
      </div>
      ;
    </div>
  );
};

export default Footer;
