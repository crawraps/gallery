import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import MenuButton from './MenuButton'
import { motion, Variants } from 'framer-motion'

interface Props {
  active: boolean
  toggleActive: () => void
}

export default function Header(props: Props): JSX.Element {
  const variants: Variants = {
    opaque: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transition: {
        delay: 0.25,
      },
    },
    transparent: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
  }

  return (
    <StyledContainer
      fluid
      animate={props.active ? 'transparent' : 'opaque'}
      initial='opaque'
      variants={variants}
      transition={{ ease: 'easeIn', duration: 0.2 }}
    >
      <MenuButton
        isOpen={props.active}
        onClick={props.toggleActive}
        width={20}
        height={20}
        strokeWidth={2}
        transition={{ type: 'spring', mass: 0.2 }}
      />
    </StyledContainer>
  )
}

const StyledContainer = styled(motion(Container))`
  height: 60px;
  position: sticky;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 5;
`
