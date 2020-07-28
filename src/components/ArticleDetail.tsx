import React from 'react'
import { graphql, useFragment } from 'react-relay/hooks'
import { parseMarkdown } from '../utils'
import { ArticleDetailFragment$key } from '../graphql/__generated__/ArticleDetailFragment.graphql'

const fragmentSpec = graphql`
  fragment ArticleDetailFragment on Article {
    id
    title
    date
    tags
    excerpt
    content
  }
`

type Props = {
  fragmentRef: ArticleDetailFragment$key
}

export default function ArticleDetail({ fragmentRef }: Props): JSX.Element {
  const article = useFragment(fragmentSpec, fragmentRef)
  return (
    <div>
      <div>{article.title}</div>
      {typeof article.date === 'string' && <div>{article.date}</div>}
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
