import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Consystem = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>역량기반 교육체계수립 컨설팅
            </h2>
            <p className={styles.mainDesc}>역량기반 교육체계수립 컨설팅은 역량모델링을 통해 도출된 공통역량, 직무역량, 리더십역량을 토대로, 조직의 비전 및 전략과 연계하여 인재를 육성함으로써 전통적
              교육훈련체계의 한계를 극복하여 역량중심의 전략적 교육훈련체계를 수립함을 목적으로 하는 컨설팅입니다.
            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/consystem.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Consystem;
