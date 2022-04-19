import React from 'react'
import { motion, Transition, SVGMotionProps } from 'framer-motion'
import styled from 'styled-components'

interface Props extends SVGMotionProps<SVGSVGElement> {
  isOpen?: boolean
  color?: string
  strokeWidth?: string | number
  transition?: Transition
  lineProps?: any
  onClick: () => void
}

export default function MenuButton({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = '#000',
  transition,
  lineProps = null,
  onClick,
  ...props
}: Props) {
  const variant = isOpen ? 'opened' : 'closed'
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    ...lineProps,
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <Button onClick={onClick}>
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow='visible'
        preserveAspectRatio='none'
        width={width}
        height={height}
      >
        <motion.line x1='0' x2={unitWidth} y1='0' y2='0' variants={top} {...lineProps} />
        <motion.line x1='0' x2={unitWidth} y1='2' y2='2' variants={center} {...lineProps} />
        <motion.line x1='0' x2={unitWidth} y1='4' y2='4' variants={bottom} {...lineProps} />
      </motion.svg>
    </Button>
  )
}

const Button = styled.button`
   {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    padding-bottom: 6px;
    z-index: 5;

    &:focus-visible {
      border: 1px solid black;
      border-radius: 2px;
    }
  }
`
