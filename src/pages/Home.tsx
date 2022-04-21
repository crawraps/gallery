import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchImages } from '../store/imagesReducer'
import { UnsplashImage } from '../types'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface formattedImages {
  [key: string]: UnsplashImage[]
}

export default function Home(): JSX.Element {
  // Fetch images
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchImages())
  }, [])

  const images: UnsplashImage[] = useSelector((state: RootState) => state.images)
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4']
  const formattedImages = categorizeImages(images, categories, 6)
  const location = useLocation()

  return (
    <Container className='pt-2'>
      {categories.map((cat, index) => (
        <Row className='mt-5' key={`${cat}-${index}-row`}>
          <h3>{cat}</h3>
          {formattedImages[cat].map(image => (
            <Col xs={12} sm={6} md={4} key={`${image.id}-col`}>
              <Card style={{ backgroundImage: `url(${image.url})` }}>
                <Link to={`images/${image.id}`} state={{ backgroundLocation: location }} />
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}

const Card = styled.div`
   {
    background-color: #85929e;
    width: 100%;
    aspect-ratio: 1 / 1;
    margin: 10px 0;
    border-radius: 4px;
    background-size: cover;
    background-repeat: no-repeat;

    & a {
      display: block;
      width: 100%;
      height: 100%;
      transition: background-color 0.2s ease-in;

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`

// Additional functions
function categorizeImages(images: UnsplashImage[], categories: string[], categorySize: number): formattedImages {
  const imagesByCategories = {} as formattedImages

  for (let i = 0; i < categories.length; i++) {
    imagesByCategories[categories[i]] = images.slice(i * categorySize, (i + 1) * categorySize)
  }

  return imagesByCategories
}
