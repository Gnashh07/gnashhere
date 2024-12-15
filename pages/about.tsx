import Link from "next/link";

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
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Hey, it’s{" "}
        <Link href="/about" style={{ color: "purple", textDecoration: "none" }}>
          GnashHere
        </Link>
      </h1>
    </div>
  );
}
