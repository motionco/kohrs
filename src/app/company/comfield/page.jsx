import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Comfield = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>사업 영역
            </h2>
            <p className={styles.mainDesc}>KOERA HRD Consulting Group은 기업의 인적자원개발 종합 솔루션을 제공하기 위하여 Consulting, Training (교육훈련), Coaching, Assessment 영역의 전문성을 보유하고 있습니다
            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/field.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comfield;
