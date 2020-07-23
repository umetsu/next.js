import { AppProps } from 'next/app'
import React from 'react'
import 'highlight.js/styles/vs2015.css'
import { useEnvironment } from '../graphql/relay'
import { RelayEnvironmentProvider } from 'react-relay/hooks'

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { initialRecords, ...rest } = pageProps
  const environment = useEnvironment(initialRecords)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...rest} />
    </RelayEnvironmentProvider>
  )
}

export default App
