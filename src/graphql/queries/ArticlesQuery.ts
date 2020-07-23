import { graphql } from 'relay-runtime'

export const articlesQuery = graphql`
  query ArticlesQuery {
    ...ArticleListFragment
  }
`
