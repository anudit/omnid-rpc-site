import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Outfit } from '@next/font/google'

import theme from '../utils/theme';
import { EnsCacheProvider } from '../contexts/EnsCache';

import '../styles/fonts.css';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <EnsCacheProvider>
        <Component {...pageProps} className={outfit.className} />
      </EnsCacheProvider>
    </ChakraProvider>
  )
}
