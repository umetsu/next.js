import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'

const defaultTitle = 'umeg.blog'
const defaultComment = 'はじめまして呑兵衛です。プログラムとかやってます。'

type Props = {
  children: React.ReactNode
  title?: string
  comment?: string
}

export default function Layout({
  children,
  title = defaultTitle,
  comment = defaultComment,
}: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={comment} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Link href={'/'}>
              <a>
                <Typography variant="h6" style={{ color: '#f9f9f9' }}>
                  umeg.blog
                </Typography>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
        <Container maxWidth={'md'} style={{ padding: '16px' }}>
          <>{children}</>
        </Container>
      </ThemeProvider>
    </>
  )
}
