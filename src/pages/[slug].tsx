import React from 'react'
import gql from 'graphql-tag'
import { GetStaticPaths, GetStaticProps } from 'next'
import { requestGraphCms } from '../graphql'
import { ArticleQuery, ArticleSlugsQuery } from '../graphql/generated/types'
import Layout from '../components/layout'
import { parseMarkdown } from '../utils'

const articleSlugsQuery = gql`
  query ArticleSlugs {
    articles(orderBy: publishedAt_DESC) {
      slug
    }
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { articles },
  } = await requestGraphCms<ArticleSlugsQuery>(articleSlugsQuery)

  return {
    paths: articles.flatMap((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}

const articleQuery = gql`
  query Article($slug: String) {
    article(where: { slug: $slug }) {
      id
      slug
      title
      date
      coverImage {
        url
        width
        height
      }
      tags
      excerpt
      content
    }
  }
`

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params: { slug } = { slug: '' },
}) => {
  const {
    data: { article },
  } = await requestGraphCms<ArticleQuery>(articleQuery, {
    variables: {
      slug: slug,
    },
  })

  return {
    props: {
      article: article,
    },
  }
}

type Props = {
  article: ArticleQuery['article']
}

function ArticleDetailPage({ article }: Props): JSX.Element {
  return (
    <Layout>
      <img src={article?.coverImage?.url} />
      <div>{article?.title}</div>
      <div>{article?.date}</div>
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
