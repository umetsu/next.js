import React from 'react'
import { parseMarkdown } from '../utils'
import gql from 'graphql-tag'
import { ArticleDetailFragment } from '../graphql/generated/types'

export const articleDetailFragment = gql`
  fragment ArticleDetail on Article {
    id
    title
    date
    tags
    excerpt
    content
  }
`

type Props = {
  article: ArticleDetailFragment
}

export default function ArticleDetail({ article }: Props): JSX.Element {
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>{article.excerpt}</div>
      <div>{article.tags}</div>
      {article.content && (
        <div
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(article.content),
          }}
        />
      )}
    </div>
  )
}
