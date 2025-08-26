// Components/Footer/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import classes from "./Footer.module.css";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import AnimatedText from "../AnimatedText/AnimatedText";
import pageLinks from "@/settings/pageLinks";

const Footer = () => {
  const mid = Math.ceil(pageLinks.length / 2);
  const rows = [pageLinks.slice(0, mid), pageLinks.slice(mid)];

  return (
    <footer className={classes.container}>
      <div className={classes.bg}>
        <Image src="/assets/images/felix 37 Rebelde boats contact section.jpg" alt="Rebelde boats – sunset from the sundeck" fill sizes="100vw" className={classes.image} priority />
      </div>

      <div className={classes.header}>
        <AnimatedText>
          <h2 className={classes.title}>Want to make it special?</h2>
        </AnimatedText>
        <AnimatedText delay={0.35}>
          <p className={classes.subTitle}>Reach out and let us turn your time in Split into something truly special.</p>
        </AnimatedText>
      </div>

      <div className={classes.largeTitle}>rebelde</div>

      <div className={classes.info}>
        <div className={classes.main}>
          <div className={classes.company}>
            <Link href="/" aria-label="Rebelde Boats home">
              <Image src="/logo/break-vect-blue.svg" width={160} height={77} alt="Rebelde Boats" className={classes.logo} />
            </Link>
            <address className={classes.address}>
              <p>REBELDE d.o.o.</p>
              <p>OIB 99723002621</p>
              <p>VINKOVAČKA 45, 21000 SPLIT</p>
            </address>
          </div>

          <nav className={classes.nav} aria-label="Footer navigation">
            {[pageLinks.slice(0, Math.ceil(pageLinks.length / 2)), pageLinks.slice(Math.ceil(pageLinks.length / 2))].map((col, i) => (
              <ul key={i} className={classes.navCol}>
                {col.map(({ href, label }) => (
                  <li key={href} className={classes.navItem}>
                    <AnimatedLink href={href}>{label.toUpperCase()}</AnimatedLink>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
          <div className={classes.contact}>
            <ul className={classes.contactList}>
              <li className={classes.contactItem}>
                <a href="tel:385953933125" className={classes.linkButton} data-after="+(385) 95 393 3125">
                  <span>+(385) 95 393 3125</span>
                </a>
              </li>
              <li className={classes.contactItem}>
                <a href="mailto:rebeldeboats@gmail.com" className={classes.linkButton} data-after="rebeldeboats@gmail.com">
                  <span>rebeldeboats@gmail.com</span>
                </a>
              </li>
            </ul>

            <div className={classes.seoBoost}>
              <p>
                REBELDE Boats offers private boat tours, half-day and full-day island excursions, and fast boat transfers from Split, Croatia. Discover hidden beaches, swim in crystal-clear waters, and enjoy a premium experience with our local skipper. Explore our{" "}
                <Link href="/our-tours">tours</Link>, meet the <Link href="/our-boat">boat</Link>, or check out our <Link href="/faq">FAQs</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.madeBy}>
          <p>© 2025 Rebelde Boats – All Rights Reserved</p>
          <p>
            designed & developed by <a href="mailto:fantaz@outlook.com">fantaz</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
