import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { initEnvironment } from '../graphql/relay'
import { fetchQuery } from 'relay-runtime'
import {
  ArticleQuery,
  ArticleQueryResponse,
} from '../graphql/__generated__/ArticleQuery.graphql'
import { articleQuery } from '../graphql/queries/ArticleQuery'
import { SlugsQuery } from '../graphql/__generated__/SlugsQuery.graphql'
import { slugsQuery } from '../graphql/queries/SlugsQuery'
import ArticleDetail from '../components/ArticleDetail'
import { Typography } from '@material-ui/core'

export const getStaticPaths: GetStaticPaths = async () => {
  const environment = initEnvironment()
  const { articles } = await fetchQuery<SlugsQuery>(environment, slugsQuery, {})

  return {
    paths: articles.flatMap((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params: { slug } = { slug: '' },
}) => {
  const environment = initEnvironment()
  const { article } = await fetchQuery<ArticleQuery>(
    environment,
    articleQuery,
    { slug }
  )
  const initialRecords = environment.getStore().getSource().toJSON()

  return {
    props: {
      article,
      initialRecords,
    },
  }
}

type Props = {
  article: ArticleQueryResponse['article']
  initialRecords?: { [p: string]: Record<any, any> }
}

export default function ArticleDetailPage({ article }: Props): JSX.Element {
  return (
    <Layout>
      {article ? (
        <ArticleDetail fragmentRef={article} />
      ) : (
        <Typography>記事の内容を取得できませんでした</Typography>
      )}
    </Layout>
  )
}
