import React from 'react'
import { render } from '../testUtils'
import { Home } from '../../src/pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
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
    getByText(/test title/i)
  })
})
