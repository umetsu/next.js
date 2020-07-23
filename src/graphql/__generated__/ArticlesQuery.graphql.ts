/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type ArticlesQueryVariables = {}
export type ArticlesQueryResponse = {
  readonly ' $fragmentRefs': FragmentRefs<'ArticleListFragment'>
}
export type ArticlesQuery = {
  readonly response: ArticlesQueryResponse
  readonly variables: ArticlesQueryVariables
}

/*
query ArticlesQuery {
  ...ArticleListFragment
}

fragment ArticleItemFragment on Article {
  id
  slug
  title
  date
}

fragment ArticleListFragment on Query {
  articles(orderBy: publishedAt_DESC) {
    ...ArticleItemFragment
    id
  }
}
*/

// FIXME: 自動生成されたコードの型が合わない
// const node: ConcreteRequest = {
const node = {
  fragment: {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'ArticlesQuery',
    selections: [
      {
        args: null,
        kind: 'FragmentSpread',
        name: 'ArticleListFragment',
      },
    ],
    type: 'Query',
    abstractKey: null,
  },
  kind: 'Request',
  operation: {
    argumentDefinitions: [],
    kind: 'Operation',
    name: 'ArticlesQuery',
    selections: [
      {
        alias: null,
        args: [
          {
            kind: 'Literal',
            name: 'orderBy',
            value: 'publishedAt_DESC',
          },
        ],
        concreteType: 'Article',
        kind: 'LinkedField',
        name: 'articles',
        plural: true,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'slug',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'title',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'date',
            storageKey: null,
          },
        ],
        storageKey: 'articles(orderBy:"publishedAt_DESC")',
      },
    ],
  },
  params: {
    cacheID: '1166519e036a6820d8da13a5d6d14cb3',
    id: null,
    metadata: {},
    name: 'ArticlesQuery',
    operationKind: 'query',
    text:
      'query ArticlesQuery {\n  ...ArticleListFragment\n}\n\nfragment ArticleItemFragment on Article {\n  id\n  slug\n  title\n  date\n}\n\nfragment ArticleListFragment on Query {\n  articles(orderBy: publishedAt_DESC) {\n    ...ArticleItemFragment\n    id\n  }\n}\n',
  },
}
;(node as any).hash = '6e03e7f2c9708685b2f688acb2d9db4e'
export default node
