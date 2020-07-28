import { AppProps } from 'next/app'
import React from 'react'
import 'highlight.js/styles/vs2015.css'
import '../global.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return <Component {...pageProps} />
}
