import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { initEnvironment } from '../graphql/relay'
import { articlesQuery } from '../graphql/queries/ArticlesQuery'
import { fetchQuery } from 'relay-runtime'
import {
  ArticlesQuery,
  ArticlesQueryResponse,
} from '../graphql/__generated__/ArticlesQuery.graphql'
import ArticleList from '../components/ArticleList'

export const getStaticProps: GetStaticProps<Props> = async () => {
  const environment = initEnvironment()
  const response = await fetchQuery<ArticlesQuery>(
    environment,
    articlesQuery,
    {}
  )
  const initialRecords = environment.getStore().getSource().toJSON()

  return {
    props: {
      articlesQueryResponse: response,
      initialRecords,
    },
  }
}

type Props = {
  articlesQueryResponse: ArticlesQueryResponse
  initialRecords?: { [p: string]: Record<any, any> }
}

export function Home({ articlesQueryResponse }: Props): JSX.Element {
  return (
    <Layout>
      <ArticleList fragmentRef={articlesQueryResponse} />
    </Layout>
  )
}

export default Home
