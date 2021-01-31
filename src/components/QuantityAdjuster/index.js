import React from 'react'
import { QuantityAdjusterWrapper, AdjusterButton } from './styles'

export default function QuantityAdjuster({item, onAdjust}){
  const { quantity } = item;

  const handledecrementQuantity = () => {
    onAdjust({variantId: item.variant.id, quantity: -1})
  }
  
  const handleincrementQuantity = () => {
    onAdjust({variantId: item.variant.id, quantity: +1})
  }

  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={handledecrementQuantity}>-</AdjusterButton>
      <div>{quantity}</div>
      <AdjusterButton onClick={handleincrementQuantity}>+</AdjusterButton>
    </QuantityAdjusterWrapper>
  )
}

