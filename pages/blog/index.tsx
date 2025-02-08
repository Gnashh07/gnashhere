import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <>
      <h1>Blog</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");

  // ✅ Fix: Create "posts/" folder if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    console.warn("⚠️ Warning: 'posts/' directory not found! Creating it...");
    fs.mkdirSync(postsDirectory, { recursive: true }); // Creates the folder
    return { props: { posts: [] } };
  }

  const filenames = fs.readdirSync(postsDirectory);

  if (filenames.length === 0) {
    console.warn("⚠️ Warning: No blog files found in 'posts/'!");
    return { props: { posts: [] } };
  }

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8").split("\n");

    return {
      slug: filename.replace(/\.txt$/, ""),
      title: fileContent[0] || "Untitled Blog Post",
    };
  });

  return { props: { posts } };
}
