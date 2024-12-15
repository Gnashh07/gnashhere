import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <header>
        <h1>GnashHere</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <h1>Projects</h1>
        <p>Showcase of my GitHub repositories and creative work.</p>
      </main>

      <footer>
        <p>&copy; 2024 GnashHere. All Rights Reserved.</p>
      </footer>
    </>
  );
}
