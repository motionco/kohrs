import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Conevaluation = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>평가 컨설팅(업적평가 & 역량평가)
            </h2>
            <p className={styles.mainDesc}>평가컨설팅은 통상적으로 업적평가와 역량평가 컨설팅으로 구분되어 진행되며, 역량과 업적이 유기적인 연관성을 가질 수 있도록 설계되며 그 구조는 아래와 같습니다.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/conevaluation.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Conevaluation;
