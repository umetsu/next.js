import {
  render as rtlRender,
  RenderOptions as RtlRenderOptions,
} from '@testing-library/react'
import React, { ComponentType } from 'react'

function Providers({ children }: { children: React.ReactElement }) {
  return children
}

type RenderOptions = RtlRenderOptions

function customRender(ui: React.ReactElement, options: RenderOptions = {}) {
  return {
    ...rtlRender(ui, { wrapper: Providers as ComponentType, ...options }),
  }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
