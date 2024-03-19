import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Conanalysis = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>직무분석 컨설팅
            </h2>
            <p className={styles.mainDesc}>직무분석컨설팅은 조직내에서 수행되어지고 있는 업무의 구성내용 및 업무에 요구되는 조건을 분석, 파악함으로써 효율적인 조직 운영 및 제반 인사시스템을
              효과적으로 구성하기 위한 기초자료 확보를 목적으로 수행됩니다.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/conanalysis.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Conanalysis;
