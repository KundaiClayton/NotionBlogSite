import styles from "./NavBar.module.css";
import Link from "next/link";
export default function NavBar({ posts }: any) {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.nav}>
        {"{ Clayton }"}
      </Link>
    </div>
  );
}
