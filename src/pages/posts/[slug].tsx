import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getAllPublished, getSingleBlogPostBySlug } from "../../lib/notion";
import styles from "./Article.module.css";
import NavBar from "../../components/NavBar/NavBar";

const CodeBlock = ({ language, codestring }: any) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};

export default function Post({ post }: any) {
  return (
    <>
      <NavBar />
      <section className={styles.container}>
        <div className={styles.main}>
          {" "}
          <p> {post.metadata.title}</p>
          <span> {post.metadata.date}</span>
          <div
            style={{
              display: "flex",
              margin: "1rem",
              justifyContent: "center",
            }}
          >
            {post.metadata.tags.map((tag: string) => (
              <div className={styles.badge} key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        <ReactMarkdown
          className={styles.reactMarkDown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <CodeBlock
                  codestring={String(children).replace(/\n$/, "")}
                  language={match[1]}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.markdown}
        </ReactMarkdown>
      </section>
    </>
  );
}
export const getStaticProps = async ({ params }: any) => {
  const post = await getSingleBlogPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};
