import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Blog({ posts }: { posts: { slug: string; title: string }[] }) {
  return (
    <>
      <header>
        <h1>Blog</h1>
      </header>

      <main className="container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.slug} className="blog-item">
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </main>

      <footer>
        <p>&copy; 2024 GnashHere. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        .container {
          padding: 20px;
        }
        .blog-item {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        a {
          font-size: 18px;
          color: #0070f3;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.txt$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const title = fileContent.split("\n")[0]; // First line as title
    return { slug, title };
  });

  return { props: { posts } };
}
