import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";

function HeadPage() {
  return (
    <Head>
      <title>Tutorial NextJS</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="NextJS tutorial" />
      <html lang="pt-BR" />

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HREMV59GJN"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HREMV59GJN');`,
        }}
      />
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
