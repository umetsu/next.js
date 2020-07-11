import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../components/layout'
import { parseMarkdown } from '../utils'
import { initEnvironment } from '../graphql/relay'
import { fetchQuery } from 'relay-runtime'
import {
  ArticleQuery,
  ArticleQueryResponse,
} from '../graphql/__generated__/ArticleQuery.graphql'
import { articleQuery } from '../graphql/queries/ArticleQuery'
import { SlugsQuery } from '../graphql/__generated__/SlugsQuery.graphql'
import { slugsQuery } from '../graphql/queries/SlugsQuery'

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
}

function ArticleDetailPage({ article }: Props): JSX.Element {
  return (
    <Layout>
      <img src={article?.coverImage?.url} />
      <div>{article?.title}</div>
      {typeof article?.date === 'string' && <div>{article.date}</div>}
      <div>{article?.excerpt}</div>
      <div>{article?.tags}</div>
      {article?.content && (
        <div
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(article.content),
          }}
        />
      )}
    </Layout>
  )
}

export default ArticleDetailPage
