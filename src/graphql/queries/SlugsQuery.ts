import { graphql } from 'relay-runtime'

export const slugsQuery = graphql`
  query SlugsQuery {
    articles(orderBy: publishedAt_DESC) {
      slug
    }
  }
`
