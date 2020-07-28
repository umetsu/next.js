import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../components/Layout'
import ArticleDetail, {
  articleDetailFragment,
} from '../components/ArticleDetail'
import { Typography } from '@material-ui/core'
import gql from 'graphql-tag'
import { fetchQuery } from '../graphql'
import {
  ArticleQuery,
  ArticleQueryVariables,
  SlugsQuery,
  SlugsQueryVariables,
} from '../graphql/generated/types'

export const slugsQuery = gql`
  query Slugs {
    articles(orderBy: publishedAt_DESC) {
      slug
    }
  }
`

export const articleQuery = gql`
  query Article($slug: String) {
    article(where: { slug: $slug }) {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`

export const getStaticPaths: GetStaticPaths = async () => {
  const { articles } = await fetchQuery<SlugsQuery, SlugsQueryVariables>(
    slugsQuery
  )

  return {
    paths: articles.flatMap((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params: { slug } = { slug: '' },
}) => {
  const { article } = await fetchQuery<ArticleQuery, ArticleQueryVariables>(
    articleQuery,
    { slug }
  )

  return {
    props: {
      article,
    },
  }
}

type Props = {
  article: ArticleQuery['article']
}

export default function ArticleDetailPage({ article }: Props): JSX.Element {
  return (
    <Layout>
      {article ? (
        <ArticleDetail article={article} />
      ) : (
        <Typography>記事の内容を取得できませんでした</Typography>
      )}
    </Layout>
  )
}
