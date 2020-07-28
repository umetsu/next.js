/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type ArticleDetailFragment = {
  readonly id: string
  readonly title: string | null
  readonly date: unknown | null
  readonly tags: ReadonlyArray<string>
  readonly excerpt: string | null
  readonly content: string | null
  readonly ' $refType': 'ArticleDetailFragment'
}
export type ArticleDetailFragment$data = ArticleDetailFragment
export type ArticleDetailFragment$key = {
  readonly ' $data'?: ArticleDetailFragment$data
  readonly ' $fragmentRefs': FragmentRefs<'ArticleDetailFragment'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'ArticleDetailFragment',
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
  type: 'Article',
  abstractKey: null,
}
;(node as any).hash = '9ee6ba2b50dea923acad148034c6df81'
export default node
