import { ColorModeScript } from '@chakra-ui/react'
import { NextSeo } from 'next-seo';
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../utils/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NextSeo
        title="Omnid - RPC Proxy"
        description="An open-source, self-hostable RPC Proxy that scans transactions before sending them to the chain for malicious/phishing activity."
        canonical="https://www.rpc.omnid.space/"
        openGraph={{
          url: 'https://rpc.omnid.space',
          title: 'Omnid - RPC Proxy',
          description: 'An open-source, self-hostable RPC Proxy that scans transactions before sending them to the chain for malicious/phishing activity.',
          images: [
            {
              url: 'https://res.cloudinary.com/anudit/image/upload/v1663422373/convo/thumbnails.png',
              width: 1280,
              height: 720,
              alt: 'Omnid RPC Proxy Thumbnail',
              type: 'image/png',
            }
          ],
          siteName: 'Omnid - RPC Proxy',
        }}
        twitter={{
          handle: '@0xOmnid',
          site: 'https://rpc.omnid.space',
          cardType: 'summary_large_image',
        }}
      />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
