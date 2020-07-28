import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ArticleList, { articleListFragment } from '../components/ArticleList'
import { fetchQuery } from '../graphql'
import gql from 'graphql-tag'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '../graphql/generated/types'

export const articlesQuery = gql`
  query Articles {
    ...ArticleList
  }
  ${articleListFragment}
`

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { articles } = await fetchQuery<ArticlesQuery, ArticlesQueryVariables>(
    articlesQuery
  )

  return {
    props: {
      articles,
    },
  }
}

type Props = {
  articles: ArticlesQuery['articles']
  initialRecords?: { [p: string]: Record<any, any> }
}

export default function Home({ articles }: Props): JSX.Element {
  return (
    <Layout>
      <ArticleList articles={articles} />
    </Layout>
  )
}
