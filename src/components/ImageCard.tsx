import React from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UnsplashImage } from '../types'

interface Props {
  img: UnsplashImage
}

export default function ImageCard({ img }: Props): JSX.Element {
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

  const exitClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.preventDefault()
    event.stopPropagation()
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
        onClick={exitClickHandler}
      >
        <AnimatedCard
          initial='hidden'
          animate={active ? 'visible' : 'hidden'}
          exit='hidden'
          variants={cardVariants}
          transition={{ ease: 'easeIn', duration: 0.2 }}
        >
          <Card.Img variant='top' src={img.url} />
          <Card.Body>
            <Card.Title>{img.author}</Card.Title>
            <Card.Text>{img.description}</Card.Text>
          </Card.Body>
        </AnimatedCard>
      </Container>
    </AnimatePresence>
  )
}

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease-in;
`
const AnimatedCard = motion(Card)
