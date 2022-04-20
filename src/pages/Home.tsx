import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

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

  return (
    <Layout>
      <Container className='pt-2'>
        {categories.map(cat => (
          <Row className='mt-5'>
            <h3>{cat}</h3>
            {formattedImages[cat].map(image => (
              <Col xs={4}>
                <Card>
                  <Link to={`images/${image.id}`}>{image.content}</Link>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </Layout>
  )
}

const Card = styled.div`
  background-color: #85929e;
  width: 100%;
  aspect-ratio: 1 / 1;
  margin: 10px 0;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`

// Additional functions
function categorizeImages(images: image[], categories: string[], categorySize: number): formattedImages {
  const imagesByCategories = {} as formattedImages

  for (let i = 0; i < categories.length; i++) {
    imagesByCategories[categories[i]] = images.slice(i * categorySize, (i + 1) * categorySize)
  }

  return imagesByCategories
}
