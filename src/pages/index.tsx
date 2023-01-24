import Head from "next/head";
import Link from "next/link";
import { getAllPublished } from "../lib/notion";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home({ posts }: any) {
  if (!posts) return <h1>No posts</h1>;

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>Clayton</title>
          <meta
            name="KundaiClayton Blog"
            content="Generated by create next app"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* nav bar */}

        <section className={styles.hero}>
          <p>
            Hi, I&apos;m Kundai! Welcome to my blog. Here you&apos;ll find posts
            about my interests, thoughts and more. Thanks for visiting!
          </p>
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
    </>
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