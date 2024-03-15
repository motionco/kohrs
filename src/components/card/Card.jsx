import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import sanitizeHtml from 'sanitize-html';

export const dynamic = "force-dynamic";

const Card = ({ key, item }) => {

  const sanitizedItem = {
    ...item,
    title: sanitizeHtml(item.title),
    desc: sanitizeHtml(item.desc.substring(0, 60)), // desc 필드의 길이를 제한한 후 살규화
    img: sanitizeHtml(item.img),
  };

  return (
    <div className={styles.container} key={key}>
      {sanitizedItem?.img && (
        <div className={styles.imageContainer}>
          <Image src={sanitizedItem.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {sanitizedItem.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{sanitizedItem.catSlug}</span>
        </div>
        <Link href={`/posts/${sanitizedItem.slug}`}>
          <h1>{sanitizedItem.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{sanitizedItem.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: sanitizedItem?.desc.substring(0, 60) }} />
        <Link href={`/posts/${sanitizedItem.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
