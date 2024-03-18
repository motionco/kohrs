import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Company = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>㈜한국HRD컨설팅그룹은
            </h2>
            <p className={styles.mainDesc}>개인과 조직이 올바른 방향을 향하여 동반성장하고 새로운 가치를 창출할 수 있도록 최적의 HR솔루션을 제공합니다.
            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="설명"
            />
          </div>
        </div>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>주요 사업 영역
            </h2>
            <p className={styles.mainDesc}>기업의 성장을 위한 가장 기본적인 투자 자원인 인적자원개발을 목표로 컨설팅, 훈련, 코칭, 진단 서비스 및  토탈 솔루션을 제공합니다.
            </p>

          </div>
          <div className={styles.imgContainer2}>
            <Image
              className={styles.img2}
              fill={true}
              src="/field.png"
              alt="설명"
            />
          </div>
        </div>
        <div className={styles.items}>
          <Link href="/portfolio/videos" className={styles.item}>
            <span className={styles.title}>Videos</span>
          </Link>
          <Link href="/portfolio/websites" className={styles.item}>
            <span className={styles.title}>Websites</span>
          </Link>
          <Link href="/portfolio/educations" className={styles.item}>
            <span className={styles.title}>Educations</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Company;
