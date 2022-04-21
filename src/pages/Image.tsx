import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImageCard from '../components/ImageCard'
import { RootState } from '../store'

export default function Image(): JSX.Element {
  const params = useParams()
  const images = useSelector((state: RootState) => state.images)
  const image = images.find(image => (params.imageId ? image.id === +params.imageId : image.id === 0))

  return <ImageCard img={image ?? images[0]} />
}
