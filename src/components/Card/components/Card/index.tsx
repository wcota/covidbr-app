import React, { ReactNode } from 'react'
import { useSwipeable, SwipeCallback } from 'react-swipeable'

import arrowIcon from 'assets/arrow.svg'
import { PinLegend } from 'components/PinLegend/components/PinLegend'
import Styled from './styles'

interface Card {
  children: ReactNode,
  isOpen: boolean,
  onToggle: SwipeCallback,
  onClick: (event: React.MouseEvent) => void,
  visible: boolean
}

export const Card = ({ children, isOpen, onToggle, visible, onClick }: Card) => {
  const handlers = useSwipeable({ onSwipedUp: onToggle, onSwipedDown: onToggle })
  return (
    <Styled.Container {...handlers} visible={visible} isOpen={isOpen}>
      {children}
      <PinLegend />
      <Styled.ArrowContainer onClick={onClick}>
        <Styled.ArrowIcon
          isOpen={isOpen}
          src={arrowIcon}
          alt="Arrow icon"
        />
      </Styled.ArrowContainer>
    </Styled.Container>
  )
}
