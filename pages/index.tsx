import Head from "next/head";
import Link from "next/link";
import { getAllPublished } from "../lib/notion";
import styles from "../styles/Home.module.css";

export default function Home({ posts }: any) {
  if (!posts) return <h1>No posts</h1>;

  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* nav bar */}
      <section>
        <div className={styles.nav}>
          <div>{"{ Clayton }"}</div>
        </div>
      </section>
      <section className={styles.hero}>
        <h2>Hi there !!, I am Kundai , Welcome to my blog</h2>
      </section>
      <main className={styles.main}>
        {posts.map((post: any, index: any) => (
          <section key={index} className={styles.card}>
            <div>
              <h2>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
            </div>
            <div>{post.date}</div>
            <p>{post.description}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 1,
  };
};
