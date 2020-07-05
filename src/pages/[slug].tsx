import gql from 'graphql-tag'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fetchGraphCms } from '../graphql/server'
import { ArticleQuery, ArticleSlugsQuery } from '../graphql/generated/types'
import React from 'react'
import Layout from '../components/layout'
import marked from 'marked'
import highlightjs from 'highlight.js'
import sanitize from 'sanitize-html'

marked.setOptions({
  highlight: (code, lang) => highlightjs.highlightAuto(code, [lang]).value,
  sanitizer: sanitize,
  pedantic: false,
  gfm: true,
  breaks: true,
  silent: false,
})

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
  } = await fetchGraphCms<ArticleQuery>(articleQuery, {
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
  } = await fetchGraphCms<ArticleSlugsQuery>(articleSlugsQuery)

  return {
    paths: articles.flatMap((a) => ({ params: { slug: a.slug } })),
    fallback: false,
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
            __html: marked(article.content),
          }}
        />
      )}
    </Layout>
  )
}

export default ArticleDetailPage
