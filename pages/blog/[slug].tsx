import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
}

export default function BlogPost({ title, content, date }: BlogPostProps) {
  return (
    <>
      <div className="blog-container">
        <h1>{title}</h1>
        <p className="blog-meta">gnash | {date}</p>
        <article>
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </article>
      </div>

      <style jsx>{`
        .blog-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          font-family: "Spline Sans Mono", monospace;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .blog-meta {
          font-size: 1rem;
          color: #aaaaaa;
          margin-bottom: 20px;
        }

        article p {
          font-size: 1.2rem;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");

  if (!fs.existsSync(postsDirectory)) {
    return { paths: [], fallback: false };
  }

  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.txt$/, "") },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params?.slug}.txt`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, "utf8").split("\n");
  const title = fileContent[0] || "Untitled Blog Post";
  const content = fileContent.slice(1).join("\n");

  // Get file last modified date
  const stats = fs.statSync(filePath);
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(stats.mtime);

  return { props: { title, content, date } };
};
