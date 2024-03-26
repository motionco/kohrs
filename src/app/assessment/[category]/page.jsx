'use client'
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

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
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{data.name}</h1>
      <div className={styles.item} key={data.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.desc}>
            {data.desc && data.desc.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <h1 className={styles.title}>{data.title2}</h1>
          <div className={styles.desc}>
            {data.desc2 && data.desc2.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={data.image}
            alt=""
          />
        </div>
      </div>
      <div className={styles.imgContainer2}>
        <Image
          className={styles.img}
          fill={true}
          src={data.image2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Category;