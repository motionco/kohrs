import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" >
          <Image src="/logo.png" alt="한국HRD컨설팅 로고" width={125} height={67} />
        </Link>
      </div>
      <ul className={styles['main-menu']}>
        <li className={styles.item}>
          <div className={styles.item__name}>
            <Link href="/company" className={styles.link}>COMPANY</Link>
          </div>
          <div className={styles.item__contents}>
            <div className={styles.contents__menu}>
              <ul className={styles.inner}>
                <li>
                  <Link href="/commission">미션</Link>
                </li>
                <li>
                  <Link href="/commilestone">주요 연혁</Link>
                </li>
                <li>
                  <Link href="/comfield">사업 영역</Link>
                </li>
              </ul>
            </div>
            <div className={styles.contents__texture}>
              <div className={styles.inner}>
                <h4>Mission</h4>
                <p>기업의 올바른 성장을 돕는 맞춤형 HR솔루션 제공</p>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.item__name}>
            <Link href="/consulting" className={styles.link}>CONSULTING</Link>
          </div>
          <div className={styles.item__contents}>
            <div className={styles.contents__menu}>
              <ul className={styles.inner}>
                <li>
                  <Link href="/consulting">컨설팅 프로세스</Link>
                </li>
                <li>
                  <Link href="/conanalysis">직무분석 컨설팅</Link>
                </li>
                <li>
                  <Link href="/conmodeling">역량모델링 컨설팅</Link>
                </li>
                <li>
                  <Link href="/consystem">역량기반 교육체계수립 컨설팅</Link>
                </li>
                <li>
                  <Link href="/concurriculum">교육과정개발 컨설팅</Link>
                </li>
                <li>
                  <Link href="/conevaluation">평가 컨설팅</Link>
                </li>
              </ul>
            </div>
            <div className={styles.contents__texture}>
              <div className={styles.inner}>
                <h4>Vision</h4>
                <p>‘심플, 최적’의 HR솔루션 업그레이드 2023!</p>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.item__name}>
            <Link href="/training" className={styles.link}>TRAINING </Link>
          </div>
          <div className={styles.item__contents}>
            <div className={styles.contents__menu}>
              <ul className={styles.inner}>
                <li>
                  <h4><Link href="/training">교육 훈련 프로세스</Link></h4>
                  <ul>
                    <li><Link href="/training">교육 훈련 프로세스</Link></li>
                  </ul>
                </li>
                <li>
                  <h4><Link href="/training/leadership">리더십</Link></h4>
                  <ul>
                    <li><Link href="/training/leadership/performance">퍼포먼스 리더십</Link></li>
                    <li><Link href="/training/leadership/coaching">코칭 리더십</Link></li>
                    <li><Link href="/training/leadership/team">팀장 리더십</Link></li>
                  </ul>
                </li>
                <li>
                  <h4><Link href="/training/sales">세일즈</Link></h4>
                  <ul>
                    <li><Link href="/training/sales/performance">퍼포먼스 세일즈</Link></li>
                    <li><Link href="/training/sales/presentation">프레젠테이션 실전</Link></li>
                    <li><Link href="/training/sales/building1">고성과 팀빌딩(1)</Link></li>
                    <li><Link href="/training/sales/building2">고성과 팀빌딩(2)</Link></li>
                  </ul>
                </li>
                <li>
                  <h4><Link href="/training/interviewer">면접관 교육</Link></h4>
                  <ul>
                    <li><Link href="/training/interviewer/interviewer">면접관 교육</Link></li>
                    <li><Link href="/training/interviewer/basics">일잘러 입문 과정</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={styles.contents__texture}>
              <div className={styles.inner}>
                <h4>Value</h4>
                <p>㈜한국HRD컨설팅그룹의 행동 규범 | 도전, 신뢰, 섬김</p>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.item__name}>
            <Link href="/coaching" className={styles.link}>COACHING </Link>
          </div>
          <div className={styles.item__contents}>
            <div className={styles.contents__menu}>
              <ul className={styles.inner}>
                <li>
                  <Link href="/coaching/coprocess">코칭 프로세스</Link>
                </li>
                <li>
                  <Link href="/coaching/coceo">CEO 및 임원 코칭</Link>
                </li>
                <li>
                  <Link href="/coaching/comanager">매니저 리더십 코칭</Link>
                </li>
                <li>
                  <Link href="/coaching/coperformance">성과 코칭</Link>
                </li>
                <li>
                  <Link href="/coaching/cogroup">그룹 코칭</Link>
                </li>
              </ul>
            </div>
            <div className={styles.contents__texture}>
              <div className={styles.inner}>
                <h4>Strategy</h4>
                <p>개인과 조직의 동반성장 로드맵 제시</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div >

  );
};

export default Navbar;
