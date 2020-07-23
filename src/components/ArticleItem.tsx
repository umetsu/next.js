import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import Link from 'next/link'
import { graphql, useFragment } from 'react-relay/hooks'
import { ArticleItemFragment$key } from '../graphql/__generated__/ArticleItemFragment.graphql'

const fragmentSpec = graphql`
  fragment ArticleItemFragment on Article {
    id
    slug
    title
    date
  }
`

type Props = {
  fragmentRef: ArticleItemFragment$key
}

export default function ArticleItem({ fragmentRef }: Props): JSX.Element {
  const article = useFragment(fragmentSpec, fragmentRef)
  return (
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
  )
}
