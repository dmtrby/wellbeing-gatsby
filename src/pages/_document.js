import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

// import GlobalIcons from '../GlobalIcons';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        </Head>
        <Head />
        <body>
          {/* <GlobalIcons /> */}
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
