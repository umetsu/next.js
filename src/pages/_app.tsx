import { AppProps } from 'next/app'
import React from 'react'
import 'highlight.js/styles/vs2015.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
