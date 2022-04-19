import React from 'react'
import { useParams } from 'react-router-dom'

export default function Image(): JSX.Element {
  const params = useParams()
  return <p>{`Image id is ${params.imageId}`}</p>
}
