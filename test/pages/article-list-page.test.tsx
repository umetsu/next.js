import React from 'react'
import { render } from '../testUtils'
import Index from '../../src/pages'
import { ArticlesQuery } from '../../src/graphql/generated/types'

const articles: ArticlesQuery['articles'] = [
  {
    id: '2',
    slug: 'post2',
    title: 'Post2',
    date: '2020-01-02',
    comment: 'Comment2',
    tags: ['React'],
    __typename: 'Article',
  },
  {
    id: '1',
    slug: 'post1',
    title: 'Post1',
    date: '2020-01-01',
    comment: 'Comment1',
    tags: ['React'],
    __typename: 'Article',
  },
]

test('記事一覧ページのレンダリング', () => {
  const { getByText, getAllByText } = render(<Index articles={articles} />)

  // 必要なものが表示されているか
  expect(getByText('Post1')).toBeInTheDocument()
  expect(getByText('2020-01-01')).toBeInTheDocument()
  expect(getByText('Comment1')).toBeInTheDocument()
  expect(getAllByText('React')).toHaveLength(articles.length)
})
