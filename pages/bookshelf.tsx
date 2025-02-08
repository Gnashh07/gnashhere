export default function Bookshelf() {
  return (
    <div className="bookshelf-container">
      <header>
        <h1>Bookshelf</h1>
      </header>
      <main>
        <p>A collection of books I&apos;ve read and recommend. Check back soon for updates!</p>
      </main>
      <footer>
        <p>&copy; 2024 GnashHere. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@400;600&display=swap");

        .bookshelf-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100vh;
          font-family: "Spline Sans Mono", monospace;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          max-width: 600px;
          line-height: 1.5;
          color: #cccccc;
        }

        footer {
          position: absolute;
          bottom: 10px;
          font-size: 0.9rem;
          color: #aaaaaa;
        }
      `}</style>
    </div>
  );
}
