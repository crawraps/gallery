import React from 'react'
import { Image as BootstrapImage } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { UnsplashImage } from '../types'

export default function Image(): JSX.Element {
  const params = useParams()
  const images = JSON.parse(localStorage.getItem('images') ?? '') as UnsplashImage[]
  const img = images.find(image => (params.imageId ? image.id === +params.imageId : image.id === 0)) ?? images[0]

  React.useEffect(() => {
    window.location.replace(img.url)
  }, [])

  return <></>
}

const StyledImage = styled(BootstrapImage)`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
