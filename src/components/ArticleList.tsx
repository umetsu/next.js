import React from 'react'
import ArticleItem, { articleItemFragment } from './ArticleItem'
import { Grid } from '@material-ui/core'
import gql from 'graphql-tag'
import { ArticleListFragment } from '../graphql/generated/types'

export const articleListFragment = gql`
  fragment ArticleList on Query {
    articles(orderBy: publishedAt_DESC) {
      ...ArticleItem
    }
  }
  ${articleItemFragment}
`

type Props = {
  articles: ArticleListFragment['articles']
}

export default function ArticleList({ articles }: Props): JSX.Element {
  return (
    <Grid container spacing={2}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </Grid>
  )
}
