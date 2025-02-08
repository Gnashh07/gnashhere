import fs from "fs";
import path from "path";

export default function Post({ title, content }: { title: string; content: string }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>

      <main className="container">
        <article>
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </article>
      </main>

      <footer>
        <p>&copy; 2024 GnashHere. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.txt$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.txt`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split("\n");
  const title = lines[0];
  const content = lines.slice(1).join("\n");

  return { props: { title, content } };
}
