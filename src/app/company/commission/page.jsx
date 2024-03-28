import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Commission = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>미션/비젼/가치
            </h2>
            <p className={styles.mainDesc}>미션/비젼/가치(임시)
            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/mission.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Commission;
