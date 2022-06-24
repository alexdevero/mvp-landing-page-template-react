import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { SnackMessageProvider } from '@contexts'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackMessageProvider>
      <Toaster />
      <Component {...pageProps} />
    </SnackMessageProvider>
  )
}

export default MyApp
