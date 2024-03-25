import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";

const Portfolio = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>리더십</h1>
        <div className={styles.items}>
          <Link href="/training/performance" className={styles.item}>
            <span className={styles.title}>퍼포먼스 리더십</span>
            <span className={styles.desc}>성과창출로 직결되는 실천주의적 리더십으로, 자신의 조직을 고성과조직으로 이끄는 성과관리리더십 스킬을 함양하는 교육입니다.</span>
            <span className={styles.sign}>&#10132;</span>

          </Link>
          <Link href="/training/coaching" className={styles.item}>
            <span className={styles.title}>코칭 리더십</span>
            <span className={styles.desc}>코칭을 통해 조직원들을 존중과 격려 소통을 통해 조직원들의 성장과 동기부여를 통해 자발적으로 목표를 달성하도록 이끄는 리더십을 향상시키는 교육입니다.
            </span>
            <span className={styles.sign}>&#10132;</span>
          </Link>
          <Link href="/training/team" className={styles.item}>
            <span className={styles.title}>팀장 리더십</span>
            <span className={styles.desc}>조직내 팀장의 역할인식을 통해 팀장의 역량을 향상시킴으로써  팀목표달성과 팀성과를 향상시키는 교육입니다.  </span>
            <span className={styles.sign}>&#10132;</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
