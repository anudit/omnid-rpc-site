import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../utils/theme';
import { EnsCacheProvider } from '../contexts/EnsCache';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <EnsCacheProvider>
        <Component {...pageProps} />
      </EnsCacheProvider>
    </ChakraProvider>
  )
}
