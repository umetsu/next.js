import React from 'react'
import { render } from '../testUtils'
import { Home } from '../../src/pages/index'

test('render Home page', () => {
  const { getByText } = render(
    <Home
      articles={[
        {
          id: 'id1',
          slug: 'slug1',
          title: 'Test title',
          date: new Date().getTime(),
        },
      ]}
    />,
    {}
  )
  expect(getByText(/test title/i)).toBeInTheDocument()
})
