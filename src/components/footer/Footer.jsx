import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/kohrd_logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>한국HRD컨설팅그룹</h1>
        </div>
        <p className={styles.desc}>
          개인과 조직이 올바른 방향을 향하여 동반성장하고 새로운 가치를 창출할 수 있도록 최적의 HR솔루션을 제공합니다.

        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Company</Link>
          <Link href="/">Consulting</Link>
          <Link href="/">Training</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Coaching</Link>
          <Link href="/">Assessment</Link>
          <Link href="/">References</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Consulting</Link>
          <Link href="/">Training</Link>
          <Link href="/">Coaching</Link>
          <Link href="/">Assessment</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
