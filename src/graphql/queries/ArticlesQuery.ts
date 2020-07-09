import { graphql } from 'relay-runtime'

export const articlesQuery = graphql`
  query ArticlesQuery {
    articles(orderBy: publishedAt_DESC) {
      id
      slug
      title
      date
    }
  }
`
