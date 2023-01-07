import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getAllPublished, getSingleBlogPostBySlug } from "../../lib/notion";
import styles from "../.././styles/Article.module.css";

const CodeBlock = ({ language, codestring }: any) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};

export default function Post({ post }: any) {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        {" "}
        <h2 style={{ color: "gray", fontSize: "2rem" }}>
          {" "}
          {post.metadata.title}
        </h2>
        <span> {post.metadata.date}</span>
        <div
          style={{ display: "flex", margin: "1rem", justifyContent: "center" }}
        >
          {post.metadata.tags.map((tag: string) => (
            <div className={styles.badge} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      <ReactMarkdown
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
