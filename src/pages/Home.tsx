import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useLocation } from 'react-router-dom'

interface image {
  id: number
  content: string
}
interface formattedImages {
  [key: string]: image[]
}

export default function Home(): JSX.Element {
  const images: image[] = new Array(24).fill(0).map((_, index) => ({ id: index, content: `Image number ${index + 1}` }))
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4']
  const formattedImages = categorizeImages(images, categories, 6)
  const location = useLocation()

  // fetch('https://api.unsplash.com/photos/random/?count=1&client_id=iepbEgFNSM7AGaiCaApmnRFvVz9UeBbLNaXPOYoin6c')
  //   .then(res => res.json())
  //   .then(res => console.log(res))

  return (
    <Container className='pt-2'>
      {categories.map((cat, index) => (
        <Row className='mt-5' key={`${cat}-${index}-row`}>
          <h3>{cat}</h3>
          {formattedImages[cat].map(image => (
            <Col xs={12} sm={6} md={4} key={`${image.content}-col`}>
              <Card>
                <Link to={`images/${image.id}`} state={{ backgroundLocation: location }}>
                  {image.content}
                </Link>
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

    & a {
      display: block;
      width: 100%;
      height: 100%;
      transition: background-color 0.2s ease-in;

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: black;
      text-decoration: none;
    }
  }
`

// Additional functions
function categorizeImages(images: image[], categories: string[], categorySize: number): formattedImages {
  const imagesByCategories = {} as formattedImages

  for (let i = 0; i < categories.length; i++) {
    imagesByCategories[categories[i]] = images.slice(i * categorySize, (i + 1) * categorySize)
  }

  return imagesByCategories
}
