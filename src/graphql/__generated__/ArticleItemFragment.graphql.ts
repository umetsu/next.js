/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type ArticleItemFragment = {
  readonly id: string
  readonly slug: string
  readonly title: string | null
  readonly date: unknown | null
  readonly ' $refType': 'ArticleItemFragment'
}
export type ArticleItemFragment$data = ArticleItemFragment
export type ArticleItemFragment$key = {
  readonly ' $data'?: ArticleItemFragment$data
  readonly ' $fragmentRefs': FragmentRefs<'ArticleItemFragment'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'ArticleItemFragment',
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
  type: 'Article',
  abstractKey: null,
}
;(node as any).hash = '30b237f835607c634309989bbf1d529c'
export default node
