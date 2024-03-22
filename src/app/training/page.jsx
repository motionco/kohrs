import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Training = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>교육 훈련

            </h2>
            <p className={styles.mainDesc}>교육 훈련 프로세스

            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/training.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
