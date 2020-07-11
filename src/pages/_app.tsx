import { AppProps } from 'next/app'
import React from 'react'
import 'highlight.js/styles/vs2015.css'
import { useEnvironment } from '../graphql/relay'
import { RelayEnvironmentProvider } from 'relay-hooks/lib'

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { initialRecords, ...rest } = pageProps
  const environment = useEnvironment(initialRecords)

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...rest} />
    </RelayEnvironmentProvider>
  )
}

export default App
