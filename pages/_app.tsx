import type { AppProps } from "next/app";
import "../styles/globals.css";  // ✅ Ensures global styles are applied

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
