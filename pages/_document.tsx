import Document, { Html, Head, Main, NextScript } from 'next/document'

class UKRDAODocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* Place any custom scripts here */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default UKRDAODocument
