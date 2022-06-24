import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { SnackMessageProvider, StorageProvider } from '@contexts'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StorageProvider>
      <SnackMessageProvider>
        <Toaster />
        <Component {...pageProps} />
      </SnackMessageProvider>
    </StorageProvider>
  )
}

export default MyApp
