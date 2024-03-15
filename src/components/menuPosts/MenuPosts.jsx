import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

export const dynamic = "force-dynamic";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/popularposts`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  const data = await res.json();
  console.log("API 응답 데이터:", data); // 여기에 console.log 추가
  return data;
};

const MenuPosts = async ({ withImage }) => {
  const data = await getData();
  // console.log(data);
  return (
    <div className={styles.items}>
      {data.posts.map((post) => (
        <Link href="/" key={post.id} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug
            }</span>
            <h3 className={styles.postTitle}>{post.title.length > 18 ? `${post.title.substring(0, 18)}...` : post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
