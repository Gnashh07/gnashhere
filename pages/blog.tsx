import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <header>
        <h1>GnashHere</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <h1>Blog</h1>
        <p>Coming soon: A collection of articles and thoughts.</p>
      </main>

      <footer>
        <p>&copy; 2024 GnashHere. All Rights Reserved.</p>
      </footer>
    </>
  );
}
