import fs from "fs";
import path from "path";
import Link from "next/link";
import { GetStaticProps } from "next";

interface BlogPost {
  slug: string;
  title: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <div className="blog-container">
        <h1>Blog</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.slug} className="blog-item">
              <Link href={`/blog/${post.slug}`} className="blog-title">
                {post.title}
              </Link>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
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
          text-align: center;
          margin-bottom: 20px;
        }

        .blog-item {
          margin-bottom: 15px;
        }

        .blog-title {
          font-size: 1.5rem; /* ✅ Increased font size */
          font-weight: bold;
          color: #00b7ff;
          text-decoration: none;
          display: block;
        }

        .blog-title:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");

  if (!fs.existsSync(postsDirectory)) {
    return { props: { posts: [] } };
  }

  const filenames = fs.readdirSync(postsDirectory);
  const posts: BlogPost[] = filenames.map((filename) => ({
    slug: filename.replace(/\.txt$/, ""),
    title: filename.replace(/\.txt$/, ""),
  }));

  return { props: { posts } };
};
