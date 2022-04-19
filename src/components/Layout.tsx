import React from 'react'
import Header from './Header'
import Navigation from './Navigation'

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props): JSX.Element {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false)

  return (
    <>
      <Header
        active={isNavOpen}
        toggleActive={() => {
          setIsNavOpen(!isNavOpen)
        }}
      />
      <Navigation
        active={isNavOpen}
        toggleActive={() => {
          if (isNavOpen) setIsNavOpen(!isNavOpen)
        }}
      />
      {children}
    </>
  )
}
