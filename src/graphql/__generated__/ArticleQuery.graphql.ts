/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type ArticleQueryVariables = {
  slug?: string | null
}
export type ArticleQueryResponse = {
  readonly article: {
    readonly ' $fragmentRefs': FragmentRefs<'ArticleDetailFragment'>
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
    ...ArticleDetailFragment
    id
  }
}

fragment ArticleDetailFragment on Article {
  id
  title
  date
  tags
  excerpt
  content
}
*/

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
    ]
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
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'ArticleDetailFragment',
            },
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
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'tags',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'excerpt',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'content',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '5e74fc905e197da9bcd890b7886e8d73',
      id: null,
      metadata: {},
      name: 'ArticleQuery',
      operationKind: 'query',
      text:
        'query ArticleQuery(\n  $slug: String\n) {\n  article(where: {slug: $slug}) {\n    ...ArticleDetailFragment\n    id\n  }\n}\n\nfragment ArticleDetailFragment on Article {\n  id\n  title\n  date\n  tags\n  excerpt\n  content\n}\n',
    },
  }
})()
;(node as any).hash = '9a20978ca443bc924e5d9f83b32f2709'
export default node
