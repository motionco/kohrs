'use client'
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  // const [showSubMenu, setShowSubMenu] = useState(false);
  // 서브메뉴를 토글하는 함수
  // const toggleSubMenu = () => {
  //   setShowSubMenu(!showSubMenu);
  // };

  return (
    <div className={styles.container} >

      {/* <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div> */}

      <div className={styles.logo}>
        <Link href="/" >
          <Image src="/kohrd_logo.png" alt="한국HRD컨설팅 로고" width={202} height={78} />
        </Link>
      </div>

      <div className={styles.links}>
        <ThemeToggle />
        <div onMouseEnter={() => setShowSubMenu('company')} onMouseLeave={() => setShowSubMenu(null)}>
          <Link href="/company" className={styles.link}>COMPANY</Link>
        </div>
        <div onMouseEnter={() => setShowSubMenu('consulting')} onMouseLeave={() => setShowSubMenu(null)}>
          <Link href="/consulting" className={styles.link}>CONSULTING</Link>
        </div>
        <div onMouseEnter={() => setShowSubMenu('training')} onMouseLeave={() => setShowSubMenu(null)}>
          <Link href="/training" className={styles.link}>TRAINING </Link>
        </div>
        <div onMouseEnter={() => setShowSubMenu('ccoaching')} onMouseLeave={() => setShowSubMenu(null)}>
          <Link href="/coaching" className={styles.link}>COACHING </Link>
        </div>
        <div onMouseEnter={() => setShowSubMenu('assessment')} onMouseLeave={() => setShowSubMenu(null)}>
          <Link href="/assessment" className={styles.link}>ASSESSMENT </Link>
        </div>
        <AuthLinks />
      </div>
      <div className={`${styles.submenu} ${showSubMenu === 'company' ? styles.show : ''}`}>
        <Link href="/commission" className={styles.lin}>미션</Link>
        <Link href="/commilestone" className={styles.lin}>주요 연혁</Link>
        <Link href="/comfield" className={styles.lin}>사업 영역</Link>
        <Link href="/consulting" className={styles.lin}>컨설팅 프로세스</Link>
        <Link href="/conanalysis" className={styles.lin}>직무분석 컨설팅</Link>
        <Link href="/conmodeling" className={styles.lin}>역량모델링 컨설팅</Link>
        <Link href="/consystem" className={styles.lin}>역량기반 교육체계수립 컨설팅</Link>
        <Link href="/concurriculum" className={styles.lin}>교육과정개발 컨설팅</Link>
        <Link href="/conevaluation" className={styles.lin}>평가 컨설팅</Link>
      </div>
      <div className={`${styles.submenu} ${showSubMenu === 'consulting' ? styles.show : ''}`}>
        <Link href="/training" className={styles.lin}>교육 훈련 프로세스</Link>
        <Link href="/trperformance" className={styles.lin}>퍼포먼스 리더십</Link>
        <Link href="/trcoaching" className={styles.lin}>코칭 리더십</Link>
        <Link href="/trteam" className={styles.lin}>팀장 리더십</Link>
        <Link href="/trsales" className={styles.lin}>퍼포먼스 세일즈</Link>
        <Link href="/trpresentation" className={styles.lin}>프레젠테이션 실전</Link>
        <Link href="/trbuilding1" className={styles.lin}>고성과 팀빌딩(1)</Link>
        <Link href="/trbuilding2" className={styles.lin}>고성과 팀빌딩(2)</Link>
        <Link href="/trinterviewer" className={styles.lin}>면접관 교육</Link>
        <Link href="/trbasics" className={styles.lin}>일잘러 입문 과정</Link>
      </div>
    </div>
  );
};

export default Navbar;
