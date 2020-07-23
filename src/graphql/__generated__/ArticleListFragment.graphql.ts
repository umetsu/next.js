/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type ArticleListFragment = {
  readonly articles: ReadonlyArray<{
    readonly ' $fragmentRefs': FragmentRefs<'ArticleItemFragment'>
  }>
  readonly ' $refType': 'ArticleListFragment'
}
export type ArticleListFragment$data = ArticleListFragment
export type ArticleListFragment$key = {
  readonly ' $data'?: ArticleListFragment$data
  readonly ' $fragmentRefs': FragmentRefs<'ArticleListFragment'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'ArticleListFragment',
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
          args: null,
          kind: 'FragmentSpread',
          name: 'ArticleItemFragment',
        },
      ],
      storageKey: 'articles(orderBy:"publishedAt_DESC")',
    },
  ],
  type: 'Query',
  abstractKey: null,
}
;(node as any).hash = '36c62eaada5f891bb0fce932fcc31d88'
export default node
