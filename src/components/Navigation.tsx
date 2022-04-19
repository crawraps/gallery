import { motion, Variants } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import NavigationOverflow from './NavigationOverflow'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

interface Props {
  active: boolean
  toggleActive: () => void
}

export default function Navigation({ active, toggleActive }: Props): JSX.Element {
  const variants: Variants = {
    hidden: {
      left: '-100%',
    },
    visible: {
      left: 0,
    },
  }

  return (
    <>
      <Container
        animate={active ? 'visible' : 'hidden'}
        initial='hidden'
        variants={variants}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <List variant='flush'>
          <Item>
            <StyledLink to='/'>Gallery</StyledLink>
          </Item>
          <Item>
            <StyledLink to='/about'>About me</StyledLink>
          </Item>
        </List>
      </Container>
      <NavigationOverflow onClick={toggleActive} active={active} />
    </>
  )
}

const Container = styled(motion.div)`
   {
    position: fixed;
    width: 400px;
    height: 100vh;
    background-color: white;
    top: 0px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 100vw;
    }
  }
`
const List = styled(ListGroup)`
  width: 100%;
`
const Item = styled(ListGroup.Item)`
   {
    width: 100%;
    height: 50vh;
    text-align: left;
    cursor: pointer;

    &:hover {
      background-color: #85929e;

      a {
        color: white;
      }
    }
  }
`
const StyledLink = styled(Link)`
   {
    text-decoration: none;
    color: black;
    display: block;
    height: 100%;
    display: flex;

    &[href='/'] {
      align-items: end;
    }
  }
`
