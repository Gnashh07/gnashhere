import fs from "fs";
import path from "path";

export default function BlogPost({ title, content }) {
  return (
    <>
      <h1>{title}</h1>
      <article>
        {content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");

  if (!fs.existsSync(postsDirectory)) {
    return { paths: [], fallback: false };
  }

  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.txt$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.txt`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, "utf8").split("\n");
  const title = fileContent[0] || "Untitled Blog Post";
  const content = fileContent.slice(1).join("\n");

  return { props: { title, content } };
}
