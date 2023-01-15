import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

import theme from '../utils/theme';
import { EnsCacheProvider } from '../contexts/EnsCache';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <EnsCacheProvider>
        <Component {...pageProps} className={inter.className} />
      </EnsCacheProvider>
    </ChakraProvider>
  )
}
