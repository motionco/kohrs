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
        <h1 className={styles.mainTitle}>교육 훈련 프로세스</h1>
        {/* <div className={styles.items}>
          <Link href="/training/process/process" className={styles.item}>
            <span className={styles.title}>교육 훈련 프로세스</span>
            <span className={styles.desc}>성과창출로 직결되는 실천주의적 리더십으로, 자신의 조직을 고성과조직으로 이끄는 성과관리리더십 스킬을 함양하는 교육입니다.</span>
            <span className={styles.sign}>&#10132;</span>
          </Link>
        </div> */}
        <div className={styles.imgContainer2}>
          <Image
            className={styles.img}
            fill={true}
            src="/trprocess.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
