import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div> */}
      <Link href="/" className={styles.logo}>
        <Image src="/kohrd_logo.png" alt="한국HRD컨설팅 로고" width={202} height={78} />
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/company" className={styles.link}>COMPANY</Link>
        <Link href="/consulting" className={styles.link}>CONSULTING</Link>
        <Link href="/training" className={styles.link}>TRAINING </Link>
        <Link href="/coaching" className={styles.link}>COACHING </Link>
        <Link href="/assessment" className={styles.link}>ASSESSMENT </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
