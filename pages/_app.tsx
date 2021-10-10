import "../styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Disney Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
