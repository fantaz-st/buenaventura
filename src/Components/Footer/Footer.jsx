import Link from "next/link";
import classes from "./Footer.module.css";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.company}>
          <Link href='/' aria-label='Rebelde boats home'>
            <Image src='/logo/break-vect-white.svg' height={77} width={160} alt='Rebelde boats logo' className={classes.logoDesktop} />
          </Link>
          <address>
            <p>REBELDE d.o.o.</p>
            <p>OIB 99723002621</p>
            <p>VINKOVAČKA 45, 21000 SPLIT</p>
          </address>
        </div>

        <nav className={classes.nav} aria-label='Footer navigation'>
          <ul>
            {["Home", "Our Boat", "Our Tours", "FAQ", "Contact"].map((item) => (
              <li key={item} className={classes.navItem}>
                <AnimatedLink href={`#${item.toLowerCase().replace(/ /g, "-")}`}>{item}</AnimatedLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={classes.seoBoost}>
          <p>
            REBELDE Boats offers private boat tours, half-day and full-day island excursions, and fast boat transfers from Split, Croatia. Discover hidden beaches, swim in crystal-clear waters, and enjoy a premium experience with our local skipper. Explore our <Link href='/our-tours'>tours</Link>,
            meet the <Link href='/our-boat'>boat</Link>, or check out our <Link href='/faq'>FAQs</Link>.
          </p>
        </div>
      </div>

      <div className={classes.madeBy}>
        <p>© 2025 Rebelde Boats – All Rights Reserved</p>
        <p>
          designed & developed <a href='mailto:fantaz@outlook.com'>by fantaz</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
