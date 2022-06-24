import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta name="keywords" content="" />

          <meta name="description" content="MVP landing page" />

          <link rel="shortcut icon" href="/favicon/favicon.ico" />

          <meta name="msapplication-TileColor" content="#000000" />

          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

          <meta name="theme-color" content="#000" />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
