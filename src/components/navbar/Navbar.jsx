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
                  <h4>교육 훈련 프로세스</h4>
                  <ul>
                    <li>교육 훈련 프로세스</li>
                    <li><Link href="/training">교육 훈련 프로세스</Link></li>
                  </ul>
                </li>
                <li>
                  <h4>리더십</h4>
                  <ul>
                    <li><Link href="/trperformance">퍼포먼스 리더십</Link></li>
                    <li><Link href="/trcoaching">코칭 리더십</Link></li>
                    <li><Link href="/trteam">팀장 리더십</Link></li>
                  </ul>
                </li>
                <li>
                  <h4>퍼포먼스 세일즈</h4>
                  <ul>
                    <li><Link href="/trsales">퍼포먼스 세일즈</Link></li>
                    <li> <Link href="/trpresentation">프레젠테이션 실전</Link></li>
                    <li><Link href="/trbuilding1">고성과 팀빌딩(1)</Link></li>
                    <li>   <Link href="/trbuilding2">고성과 팀빌딩(2)</Link></li>
                  </ul>
                </li>
                <li>
                  <h4>면접관 교육</h4>
                  <ul>
                    <li><Link href="/trinterviewer">면접관 교육</Link></li>
                    <li><Link href="/trbasics">일잘러 입문 과정</Link></li>
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
                  <h4>코칭 프로세스</h4>
                </li>
                <li>
                  <h4>CEO 및 임원 코칭</h4>
                </li>
                <li>
                  <h4>매니저 리더십 코칭</h4>
                </li>
                <li>
                  <h4>성과 코칭</h4>
                </li>
                <li>
                  <h4>그룹 코칭</h4>
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
