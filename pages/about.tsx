export default function About() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        minHeight: "100vh",
        fontFamily: "Spline Sans Mono, monospace",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        Hey, it&apos;s good to see you here!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", lineHeight: "1.8" }}>
        TL;DR of my story:
      </p>
      <ul
        style={{
          listStyleType: "decimal",
          fontSize: "1.2rem",
          lineHeight: "1.5",
          maxWidth: "600px",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        <li style={{ color: "#FFA500" }}>Wanted to be a wildlife biologist as a kid but got inclined towards space and physics.</li>
        <li style={{ color: "#FFA500" }}>Participated in an intra-city science fair when I was 14 where I presented about time travel and quantum physics (ended up winning, lol).</li>
        <li style={{ color: "#FFA500" }}>Got into MUNs and participated in a few.</li>
        <li style={{ color: "#FFA500" }}>Took up electronics and communications. Also realized that I love to build stuff and pitch ideas.</li>
        <li style={{ color: "#FFA500" }}>Built a podcasting-based community called Gen Speaks. Was a podcast host and researcher.</li>
        <li style={{ color: "#FFA500" }}>Worked with some big-time founders and helped them design their community outreach panels and programs.</li>
        <li style={{ color: "#FFA500" }}>Worked as a software developer at a well-known MNC for a year.</li>
        <li style={{ color: "#FFA500" }}>
          Presently running an exclusive members-only community called The Renaissance. <br />
          <strong>Reach out to me to know more!!</strong>
        </li>
        <li style={{ color: "#FFA500" }}>Learning AI/ML one research paper at a time and building some cool projects. (Check out my blogs to know more)</li>
        <li style={{ color: "#FFA500" }}>Currently working as an ML Engineer at Kona AI</li>
      </ul>
    </div>
  );
}
