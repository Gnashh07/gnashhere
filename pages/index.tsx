// index.tsx
import Link from "next/link";

export default function Home() {
  return (
    (<div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        hey, it's{" "}
        <Link
          href="/about"
          style={{
            color: "purple",
            textDecoration: "none",
          }}>
          
            gnashhere
          
        </Link>
      </h1>
      <p style={{ marginBottom: "2rem" }}>this is my second brain.</p>
      <nav style={{ display: "flex", gap: "1.5rem", fontSize: "1.2rem" }}>
        <a href="/blog" style={{ textDecoration: "none", color: "white" }}>
          blog
        </a>
        <a href="/projects" style={{ textDecoration: "none", color: "white" }}>
          projects
        </a>
        <a href="/contact" style={{ textDecoration: "none", color: "white" }}>
          contact
        </a>
        <a href="/bookshelf" style={{ textDecoration: "none", color: "white" }}>
          bookshelf
        </a>
      </nav>
      <footer style={{ marginTop: "2rem", fontSize: "0.8rem" }}>
        © 2024 GnashHere. All Rights Reserved.
      </footer>
    </div>)
  );
}
