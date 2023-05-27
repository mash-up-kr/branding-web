import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <link
            href="https://static.mash-up.kr/fonts/Gilroy-Bold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="https://static.mash-up.kr/fonts/Gilroy-Extrabold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Regular.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Medium.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Bold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://static.mash-up.kr/fonts/gilroy.css" />
          <link rel="stylesheet" href="https://static.mash-up.kr/fonts/spoqaHanSansNeo.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
