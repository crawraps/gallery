import React from 'react'
import { useParams } from 'react-router-dom'
import ImageCard from '../components/ImageCard'

export default function Image(): JSX.Element {
  const params = useParams()
  return <ImageCard img='123' />
}
