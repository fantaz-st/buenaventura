// components/Header/HeaderStatic.tsx
import Link from "next/link";
import Image from "next/image";
import pageLinks from "@/settings/pageLinks";
import classes from "./Header.module.css";

/**
 * Pure‑server component – only markup & critical assets.
 * Renders instantly with the HTML streamed from the server.
 */
export default function HeaderStatic() {
  return (
    <header className={`${classes.header} ${classes.visible}`}>
      <div className={`${classes.container} ${classes.transparentContainer}`}>
        <div className={classes.logo}>
          <Link href="/" aria-label="Rebelde Boats home">
            <Image src="/logo/break-vect-white-mobile.svg" alt="Rebelde Boats logo" width={180} height={44} priority />
          </Link>
        </div>

        <nav className={classes.nav}>
          {pageLinks.map(({ href, label }) => (
            <div key={href} className={classes.navItem}>
              <Link href={href}>{label.toUpperCase()}</Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
