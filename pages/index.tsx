import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

export default function Home() {
  return (
    <div
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
        hey, it&apos;s{" "}
        <Link href="/about" style={{ color: "purple", textDecoration: "underline" }}>
          gnashhere
        </Link>
      </h1>
      <p style={{ marginBottom: "2rem" }}>this is my second brain.</p>
      <nav style={{ display: "flex", gap: "1.5rem", fontSize: "1.2rem" }}>
        <Link href="/blog" style={{ textDecoration: "none", color: "white" }}>
          blog
        </Link>
        <Link href="/projects" style={{ textDecoration: "none", color: "white" }}>
          projects
        </Link>
        <Link href="/bookshelf" style={{ textDecoration: "none", color: "white" }}>
          bookshelf
        </Link>
      </nav>
      <hr style={{visibility: "hidden"}}/>
      <hr style={{visibility: "hidden"}}/>
      <nav style={{ display: "flex", gap: "1.5rem", fontSize: "1.0rem" }}>
        <a href="https://x.com/gnashxnax" style={{ textDecoration: "none", color: "white" }}>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://www.instagram.com/gnashhh_" style={{ textDecoration: "none", color: "white" }}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/ganeshpulipaka001/" style={{ textDecoration: "none", color: "white" }}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </nav>
      <footer style={{ marginTop: "2rem", fontSize: "0.8rem" }}>
        © 2024 GnashHere. All Rights Reserved.
      </footer>
    </div>
  );
}
