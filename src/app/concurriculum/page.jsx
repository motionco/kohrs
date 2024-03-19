import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Concurriculum = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>교육과정개발 컨설팅
            </h2>
            <p className={styles.mainDesc}>☞ 과정개발개발 컨설팅은 ISD(Instructional System Design & Development)모델을 기반으로, 분석-설계-개발-실행-평가의 5단계 프로세스를 통해 체계적이고 과학적으로
              교육과정을 개발하는 컨설팅입니다.
            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/concurriculum.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Concurriculum;
