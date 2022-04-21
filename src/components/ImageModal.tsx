import React from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function ImageModal(): JSX.Element {
  const params = useParams()
  const images = useSelector((state: RootState) => state.images)
  const img = images.find(image => (params.imageId ? image.id === +params.imageId : image.id === 0)) ?? images[0]

  const [active, setActive] = React.useState(true)
  const navigate = useNavigate()

  const overflowVariants: Variants = {
    hidden: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    visible: {
      backgroundColor: 'rgba(0, 0, 0, .4)',
    },
  }
  const cardVariants: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  }

  const exitClickHandler = (event?: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setActive(false)
    setTimeout(() => {
      navigate('/')
    }, 200)
  }

  return (
    <AnimatePresence>
      <Container
        initial='hidden'
        animate={active ? 'visible' : 'hidden'}
        exit='hidden'
        variants={overflowVariants}
        transition={{ ease: 'easeIn', duration: 0.2 }}
      >
        <Overflow onClick={exitClickHandler} />
        <StyledCard
          initial='hidden'
          animate={active ? 'visible' : 'hidden'}
          exit='hidden'
          variants={cardVariants}
          transition={{ ease: 'easeIn', duration: 0.2 }}
        >
          <Card.Img variant='top' alt='modal-image' src={img.url} height={window.innerHeight * 0.8} loading='lazy' />
          <Card.Body>
            <Card.Title>{img.author}</Card.Title>
            {img.description ? <Card.Text>{img.description}</Card.Text> : null}
          </Card.Body>
        </StyledCard>
      </Container>
    </AnimatePresence>
  )
}

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease-in;
`
const StyledCard = styled(motion(Card))`
  border: none;
`
const Overflow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`
