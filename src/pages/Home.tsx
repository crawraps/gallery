import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Placeholder from 'react-bootstrap/Placeholder'
import { Link, useLocation } from 'react-router-dom'
import { UnsplashImage } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { fetchImages } from '../store/imagesReducer'

interface formattedImages {
  [key: string]: UnsplashImage[]
}

export default function Home(): JSX.Element {
  const images: UnsplashImage[] = useSelector((state: RootState) => state.images)
  const categories = ['Unnamed category', 'Not a category', 'Category', 'My favorite category']
  const formattedImages = categorizeImages(images, categories, 6)
  const location = useLocation()

  // Fetch images
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchImages())
  }, [])

  return (
    <Container className='pt-2'>
      {categories.map((cat, index) => (
        <Row className='mt-5' key={`${cat}-${index}-row`}>
          <h3>{cat}</h3>
          {images.length !== 0 ? (
            formattedImages[cat].map(image => (
              <Col xs={12} sm={6} md={4} key={`${image.id}-col`}>
                <Card>
                  <Link to={`images/${image.id}`} state={{ backgroundLocation: location }}>
                    <StyledImage src={image.url} alt='gallery-image' height='100%' loading='lazy' />
                  </Link>
                </Card>
              </Col>
            ))
          ) : (
            <Placeholder animtion='glow'>
              <Placeholder xs={12} />
            </Placeholder>
          )}
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
    overflow: hidden;
    position: relative;

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
const StyledImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
const StyledPlaceholder = styled.div`
  width: 100%;
`

// Additional functions
function categorizeImages(images: UnsplashImage[], categories: string[], categorySize: number): formattedImages {
  const imagesByCategories = {} as formattedImages

  for (let i = 0; i < categories.length; i++) {
    imagesByCategories[categories[i]] = images.slice(i * categorySize, (i + 1) * categorySize)
  }

  return imagesByCategories
}
