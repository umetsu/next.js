import { AppProps } from 'next/app'
import React from 'react'
import 'highlight.js/styles/vs2015.css'
import { useEnvironment } from '../graphql/relay'
import { ReactRelayContext } from 'react-relay'

function App({ Component, pageProps }: AppProps): JSX.Element {
  const environment = useEnvironment(pageProps.initialRecords)

  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <Component {...pageProps} />
    </ReactRelayContext.Provider>
  )
}

export default App
