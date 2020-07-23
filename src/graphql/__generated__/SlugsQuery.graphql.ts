/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime'
export type SlugsQueryVariables = {}
export type SlugsQueryResponse = {
  readonly articles: ReadonlyArray<{
    readonly slug: string
  }>
}
export type SlugsQuery = {
  readonly response: SlugsQueryResponse
  readonly variables: SlugsQueryVariables
}

/*
query SlugsQuery {
  articles(orderBy: publishedAt_DESC) {
    slug
    id
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        kind: 'Literal',
        name: 'orderBy',
        value: 'publishedAt_DESC',
      },
    ],
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'slug',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'SlugsQuery',
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: 'Article',
          kind: 'LinkedField',
          name: 'articles',
          plural: true,
          selections: [v1 /*: any*/],
          storageKey: 'articles(orderBy:"publishedAt_DESC")',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'SlugsQuery',
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: 'Article',
          kind: 'LinkedField',
          name: 'articles',
          plural: true,
          selections: [
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'id',
              storageKey: null,
            },
          ],
          storageKey: 'articles(orderBy:"publishedAt_DESC")',
        },
      ],
    },
    params: {
      cacheID: 'fc4ec38338f84641932e6944d47750f2',
      id: null,
      metadata: {},
      name: 'SlugsQuery',
      operationKind: 'query',
      text:
        'query SlugsQuery {\n  articles(orderBy: publishedAt_DESC) {\n    slug\n    id\n  }\n}\n',
    },
  }
})()
;(node as any).hash = '08ceb31e2856d98554daf71ede8d4205'
export default node
