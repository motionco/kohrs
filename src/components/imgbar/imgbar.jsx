import React from "react";
import styles from "./imgbar.module.css";
import Image from "next/image";

const Imgbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    // src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>COMPANY</h1>
                    <h2 className={styles.imgDesc}>
                        (주)한국 HRD컨설팅그룹을 소개합니다.
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
            </div>
        </div>
    );
};

export default Imgbar;
