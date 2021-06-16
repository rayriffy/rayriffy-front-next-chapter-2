import Document, { Html, Head, Main, NextScript } from 'next/document'

class NextDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="rayriffy" />
          <meta
            name="description"
            content="Welcome to the front frontier of rayriffy.com!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="/" />
          <meta property="og:title" content="rayriffy" />
          <meta
            property="og:description"
            content="Welcome to the front frontier of rayriffy.com!"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="/" />
          <meta property="twitter:title" content="rayriffy" />
          <meta
            property="twitter:description"
            content="Welcome to the front frontier of rayriffy.com!"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap"
            rel="stylesheet"
            media="screen,print"
          />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
