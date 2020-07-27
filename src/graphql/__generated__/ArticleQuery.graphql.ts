/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime'
export type ArticleQueryVariables = {
  slug?: string | null
}
export type ArticleQueryResponse = {
  readonly article: {
    readonly id: string
    readonly slug: string
    readonly title: string | null
    readonly date: unknown | null
    readonly coverImage: {
      readonly url: string
      readonly width: number | null
      readonly height: number | null
    } | null
    readonly tags: ReadonlyArray<string>
    readonly excerpt: string | null
    readonly content: string | null
  } | null
}
export type ArticleQuery = {
  readonly response: ArticleQueryResponse
  readonly variables: ArticleQueryVariables
}

/*
query ArticleQuery(
  $slug: String
) {
  article(where: {slug: $slug}) {
    id
    slug
    title
    date
    coverImage {
      url
      width
      height
      id
    }
    tags
    excerpt
    content
  }
}
*/

// FIXME: 自動生成されたコードの型が合わない
//  const node: ConcreteRequest = (function () {
const node = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'slug',
      },
    ],
    v1 = [
      {
        fields: [
          {
            kind: 'Variable',
            name: 'slug',
            variableName: 'slug',
          },
        ],
        kind: 'ObjectValue',
        name: 'where',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'slug',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'title',
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'date',
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'url',
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'width',
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'height',
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'tags',
      storageKey: null,
    },
    v10 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'excerpt',
      storageKey: null,
    },
    v11 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'content',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'ArticleQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Article',
          kind: 'LinkedField',
          name: 'article',
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            v5 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: 'Asset',
              kind: 'LinkedField',
              name: 'coverImage',
              plural: false,
              selections: [v6 /*: any*/, v7 /*: any*/, v8 /*: any*/],
              storageKey: null,
            },
            v9 /*: any*/,
            v10 /*: any*/,
            v11 /*: any*/,
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'ArticleQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Article',
          kind: 'LinkedField',
          name: 'article',
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            v5 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: 'Asset',
              kind: 'LinkedField',
              name: 'coverImage',
              plural: false,
              selections: [
                v6 /*: any*/,
                v7 /*: any*/,
                v8 /*: any*/,
                v2 /*: any*/,
              ],
              storageKey: null,
            },
            v9 /*: any*/,
            v10 /*: any*/,
            v11 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '05c38b05b0e94b674ac6dc4241c3ed41',
      id: null,
      metadata: {},
      name: 'ArticleQuery',
      operationKind: 'query',
      text:
        'query ArticleQuery(\n  $slug: String\n) {\n  article(where: {slug: $slug}) {\n    id\n    slug\n    title\n    date\n    coverImage {\n      url\n      width\n      height\n      id\n    }\n    tags\n    excerpt\n    content\n  }\n}\n',
    },
  }
})()
;(node as any).hash = '5bd2d1d83d539f19c9a74bd1e0ef93bc'
export default node
