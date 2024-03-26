import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Assessment Solution</h1>
        <div className={styles.imgContainer2}>
          <Image
            className={styles.img}
            fill={true}
            src="/asleadership.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
