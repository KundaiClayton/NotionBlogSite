import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar({ posts }: any) {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.nav}>
        {"{ Clayton }"}
      </Link>
      <div className={styles.avatar}>
        <Image
          src="/profileimage.jpeg"
          alt="Picture of the author"
          width={50}
          height={50}
          style={{
            objectFit: "cover",
            borderRadius: "100px", //👈 and here you can select border radius
          }}
        />
      </div>
    </div>
  );
}
