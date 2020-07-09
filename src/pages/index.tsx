import React from 'react'
import { GetStaticProps } from 'next'
import { Card, CardContent, Typography } from '@material-ui/core'
import Link from 'next/link'
import Layout from '../components/layout'
import { initEnvironment } from '../graphql/relay'
import { articlesQuery } from '../graphql/queries/ArticlesQuery'
import { fetchQuery } from 'react-relay'
import {
  ArticlesQuery,
  ArticlesQueryResponse,
} from '../graphql/__generated__/ArticlesQuery.graphql'

export const getStaticProps: GetStaticProps<Props> = async () => {
  const environment = initEnvironment()
  const { articles } = await fetchQuery<ArticlesQuery>(
    environment,
    articlesQuery,
    {}
  )
  const initialRecords = environment.getStore().getSource().toJSON()

  return {
    props: {
      articles,
      initialRecords,
    },
  }
}

type Props = {
  articles: ArticlesQueryResponse['articles']
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
