/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type ArticleItemFragment = {
  readonly id: string
  readonly slug: string
  readonly title: string | null
  readonly date: unknown | null
  readonly tags: ReadonlyArray<string>
  readonly excerpt: string | null
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
  ],
  type: 'Article',
  abstractKey: null,
}
;(node as any).hash = 'a89cf4a374de32baf54812aca5736358'
export default node
