import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

export default function Layout(): JSX.Element {
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
      <Outlet />
    </>
  )
}
