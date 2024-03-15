import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import sanitizeHtml from 'sanitize-html';

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`, {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}?popular=true`, {
    // model Post { isFeature~~~~~
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  let data = await getData(slug);

  data = {
    ...data,
    title: sanitizeHtml(data.title),
    desc: sanitizeHtml(data.desc),
    img: sanitizeHtml(data.img),
    content: sanitizeHtml(data.content),
  };
  // console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name ?? '익명'}</span>
              <span className={styles.date}>03.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
