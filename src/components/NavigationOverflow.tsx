import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

interface Props {
  active: boolean
  onClick: () => void
}

export default function NavigationOverflow({ active, onClick }: Props): JSX.Element {
  const variants: Variants = {
    hidden: {
      display: 'none',
      opacity: 0,
      transition: {
        display: { delay: 0.3 },
      },
    },
    visible: {
      display: 'block',
      opacity: 1,
    },
  }

  return (
    <Container
      animate={active ? 'visible' : 'hidden'}
      variants={variants}
      initial='hidden'
      transition={{ ease: 'easeIn', duration: 0.2, delay: 0.1 }}
      onClick={onClick}
    />
  )
}

const Container = styled(motion.div)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0px;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
`
