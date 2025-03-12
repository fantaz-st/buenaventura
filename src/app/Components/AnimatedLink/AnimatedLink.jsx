import Link from "next/link";
import styles from "./AnimatedLink.module.css";

const AnimatedLink = ({ href, children }) => (
  <Link href={href} className={styles.linkButton} data-after={children}>
    <span>{children}</span>
  </Link>
);

export default AnimatedLink;
