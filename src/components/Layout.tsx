import React from 'react'
import { Container } from '@material-ui/core'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <Container maxWidth={'md'}>
      <>{children}</>
    </Container>
  )
}

export default Layout
