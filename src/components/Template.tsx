import React from 'react'

interface Props {
  children: JSX.Element
}

export default function Template({ children }: Props): JSX.Element {
  return (
    <div>
      <p>Test text</p>
      {children}
    </div>
  )
}
