import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Ensures proper mobile scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ✅ Ensures proper character encoding */}
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
