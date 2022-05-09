import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";

function HeadPage() {
  return (
    <Head>
      <title>Tutorial NextJS</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="NextJS tutorial" />
      <html lang="pt-BR" />
    </Head>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadPage />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
