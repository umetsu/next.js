/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime'
export type ArticlesQueryVariables = {}
export type ArticlesQueryResponse = {
  readonly articles: ReadonlyArray<{
    readonly id: string
    readonly slug: string
    readonly title: string | null
    readonly date: unknown | null
  }>
}
export type ArticlesQuery = {
  readonly response: ArticlesQueryResponse
  readonly variables: ArticlesQueryVariables
}

/*
query ArticlesQuery {
  articles(orderBy: publishedAt_DESC) {
    id
    slug
    title
    date
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
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
  ]
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'ArticlesQuery',
      selections: v0 /*: any*/,
      type: 'Query',
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'ArticlesQuery',
      selections: v0 /*: any*/,
    },
    params: {
      id: null,
      metadata: {},
      name: 'ArticlesQuery',
      operationKind: 'query',
      text:
        'query ArticlesQuery {\n  articles(orderBy: publishedAt_DESC) {\n    id\n    slug\n    title\n    date\n  }\n}\n',
    },
  }
})()
;(node as any).hash = 'bb8527324c7ba7fb03b49c17687df745'
export default node
