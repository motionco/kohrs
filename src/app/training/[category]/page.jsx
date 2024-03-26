'use client'
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Imgbar from "@/components/imgbar/imgbar";
import Link from "next/link";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};


const Category = ({ params }) => {
  console.log(params)
  const data = getData(params.category);

  return (
    <>
      <Imgbar />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{params.category}</h1>
        <div className={styles.items}>
          {data.map((item) => (
            <Link key={item.id} href={item.src} className={styles.item}>
              <span className={styles.title}>{item.subject}</span>
              <span className={styles.desc}>{item.summ}</span>
              <span className={styles.sign}>&#10132;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
