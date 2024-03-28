import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Imgbar from "@/components/imgbar/imgbar";
import Image from "next/image";
import { Search } from "@mui/icons-material";

const Portfolio = () => {
  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Assessment Solution</h1>
        <div className={styles.imgContainer2}>
          <Image
            className={styles.img}
            fill={true}
            src="/asleadership.png"
            alt=""
          />
        </div>

      </div>
      <div>
        <Search className={styles.searchIcon} />
      </div>
    </>
  );
};

export default Portfolio;
