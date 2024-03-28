import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";

const Expert = () => {
  // 이미지와 설명 데이터 배열
  const images = [
    {
      id: 1,
      src: "/man1.png",
      alt: "설명 1",
      name: "고 정 용",
      description: `
        경력
        - 대표 컨설턴트
        - 전) 한국카네기연구소 소장
        - 전) 성균관대학교 국정전문대학원 겸임교수
        학력
        - AEU Ph.d(cand) Organization Leadership
          & Coaching
        - 고려대학교 교육대학원 기업교육 석사
        - 데일카네기 트레이너
        - KPC 코치
        `.split("\n"),
    },
    {
      id: 2,
      src: "/man2.png",
      alt: "설명 2",
      name: "김 승 중",
      description: `
        경력
        - 수석 컨설턴트(기업연구소장)
        - 전) 씨오디이 대표
        - 전) 한국카네기연구소 컨설팅본부장
        
        학력
        - 광운대학교 산업심리학 박사
        - 한양대학교 경영학 석사
        - 한양대학교 경영학과  
        - Situational Leadership Certified Trainer
        - Korea Professional Coach
        - MBTI  & Clifton StrengthsFinder Certified Coach
        `.split("\n"),
    },
    {
      id: 3,
      src: "/man3.png",
      alt: "설명 3",
      name: "이 강 애",
      description: [

      ],
    },
    {
      id: 4,
      src: "/man.png",
      alt: "설명 4",
      name: "남 상 봉",
      description: [

      ],
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.mainTitle}>컨설턴트 프로필</h2>
          <p className={styles.mainDesc}>
            ㈜한국HRD컨설팅 그룹은 HR분야의 전문가 그룹으로, 민간 및 공공
            컨설팅을 아우르는 전문성을 가진 컨설턴트 Pool을 보유하고
            있습니다.
          </p>
        </div>
        <div className={styles.imgWrapper}>
          {images.map((image) => (
            <div key={image.id} className={styles.imgItem}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  layout="fill"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
              <h3 className={styles.imgName}>
                {/* <Link href="/expert/profile/{image.id}">{image.name}</Link> */}
                {image.name}
              </h3>
              <div className={styles.description}>
                {image.description.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Expert;
