import gql from 'graphql-tag'
import { ArticlesQuery } from '../graphql/generated/types'
import React from 'react'
import { GetStaticProps } from 'next'
import { fetchGraphCms } from '../graphql/server'
import { Card, CardContent, Typography } from '@material-ui/core'
import Link from 'next/link'
import Layout from '../components/layout'

const articlesQuery = gql`
  query Articles {
    articles(orderBy: publishedAt_DESC) {
      id
      slug
      title
      date
    }
  }
`

export const getStaticProps: GetStaticProps<Props> = async () => {
  const {
    data: { articles },
  } = await fetchGraphCms<ArticlesQuery>(articlesQuery)

  return {
    props: {
      articles: articles,
    },
  }
}

type Props = {
  articles: Readonly<ArticlesQuery['articles']>
}

export function Home({ articles }: Props): JSX.Element {
  return (
    <Layout>
      {articles.map((article) => (
        <Card key={article.id}>
          <CardContent>
            <Link href={'/[slug]'} as={`/${article.slug}`}>
              <a>
                <Typography color="textSecondary" gutterBottom>
                  {article.title}
                </Typography>
              </a>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Layout>
  )
}

export default Home
