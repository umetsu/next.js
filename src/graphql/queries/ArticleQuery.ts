import { graphql } from 'relay-runtime'

export const articleQuery = graphql`
  query ArticleQuery($slug: String) {
    article(where: { slug: $slug }) {
      ...ArticleDetailFragment
    }
  }
`
