import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Consulting = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>컨설팅 프로세스
            </h2>
            <p className={styles.mainDesc}>☞ 고객사에게 최적의 Solution을 제공하기 위하여, 고객사의 니즈 파악 및 컨설팅 목표 합의-현황 분석-문제발견-솔루션 제공-실행 및 사후 대책의 5단계 프로세스로 진행합니다.

            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/consulting.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulting;
