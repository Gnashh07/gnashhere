import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <header>
        <h1>GnashHere</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </header>

      <main className="container">
        <h1>Contact</h1>
        <p>Feel free to reach out:</p>
        <ul>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://github.com">GitHub</a></li>
          <li>Email: yourname@example.com</li>
        </ul>
      </main>

      <footer>
        <p>&copy; 2024 GnashHere. All Rights Reserved.</p>
      </footer>
    </>
  );
}
