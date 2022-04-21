import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Image from './pages/Image'
import Layout from './components/Layout'
import ImageModal from './components/ImageModal'

export default function App(): JSX.Element {
  const location = useLocation()
  let state = location.state as { backgroundLocation?: Location }

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='images/:imageId' element={<Image />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path='images/:imageId' element={<ImageModal />} />
        </Routes>
      )}
    </>
  )
}
