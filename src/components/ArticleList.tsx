import React from 'react'
import ArticleItem from './ArticleItem'
import { graphql } from 'relay-runtime'
import { ArticleListFragment$key } from '../graphql/__generated__/ArticleListFragment.graphql'
import { useFragment } from 'react-relay/hooks'
import { Grid } from '@material-ui/core'

const fragmentSpec = graphql`
  fragment ArticleListFragment on Query {
    articles(orderBy: publishedAt_DESC) {
      ...ArticleItemFragment
    }
  }
`

type Props = {
  fragmentRef: ArticleListFragment$key
}

export default function ArticleList({ fragmentRef }: Props): JSX.Element {
  const fragment = useFragment(fragmentSpec, fragmentRef)
  return (
    <Grid container spacing={2}>
      {fragment.articles.map((article, index) => (
        <ArticleItem key={index} fragmentRef={article} />
      ))}
    </Grid>
  )
}
