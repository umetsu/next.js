import gql from 'graphql-tag'
import { Article, ArticlesQuery } from '../graphql/generated/types'
import React from 'react'
import { GetStaticProps } from 'next'
import { fetchGraphCms } from '../graphql/server'
import { Container, CardContent, Typography, Card } from '@material-ui/core'

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
  try {
    const {
      data: { articles },
    } = await fetchGraphCms<ArticlesQuery>(articlesQuery)
    return {
      props: {
        articles: articles,
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: {
        articles: [],
      },
    }
  }
}

type Props = {
  articles: ReadonlyArray<Pick<Article, 'id' | 'slug' | 'title' | 'date'>>
}

export function Home({ articles }: Props): JSX.Element {
  return (
    <Container maxWidth={'md'}>
      {articles.map((article) => (
        <Card key={article.id}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {article.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default Home
