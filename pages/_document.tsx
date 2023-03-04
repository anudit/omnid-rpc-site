import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../utils/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
            <meta name="title" content="Omnid - RPC Playground" />
            <meta name="description" content="An open-source, self-hostable RPC Proxy that scans transactions before sending them to the chain for malicious/phishing activity." />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛝</text></svg>" />
            <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛝</text></svg>"/>
            <link rel="manifest" href="/manifest.json"></link>

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://playground.omnid.space/" />
            <meta property="og:title" content="Omnid - RPC Playground" />
            <meta property="og:description" content="An open-source, self-hostable RPC Proxy that scans transactions before sending them to the chain for malicious/phishing activity." />
            <meta property="og:image" content={"https://res.cloudinary.com/anudit/image/upload/v1673782417/convo/poster-playground.png"} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://playground.omnid.space/" />
            <meta property="twitter:title" content="Omnid - RPC Playground" />
            <meta property="twitter:description" content="An open-source, self-hostable RPC Proxy that scans transactions before sending them to the chain for malicious/phishing activity." />
            <meta property="twitter:image" content={"https://res.cloudinary.com/anudit/image/upload/v1673782417/convo/poster-playground.png"} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;500;800&display=swap" rel="stylesheet" />
              
            <meta name="theme-color" content="#000" />
        </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
