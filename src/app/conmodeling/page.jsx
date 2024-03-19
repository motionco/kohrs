import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Conmodeling = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <div className={styles.itm}>
          <div className={styles.content}>
            <h2 className={styles.mainTitle}>역량모델링 컨설팅
            </h2>
            <p className={styles.mainDesc}>역량모델링 컨설팅을 통해 조직에서 구성원들에게 요구하는 것이 무엇인지 알 수 있고, 구성원 집단간 역량의 차이를 명확하게 파악할 수 있으며, 구성원 개인별 역량파악이 가능하므로 선발, 배치, 평가, 교육, 경력개발 등에 활용할 수 있습니다.
            </p>

          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/conmodeling.png"
              alt="설명"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Conmodeling;
