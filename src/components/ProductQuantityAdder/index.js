import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'

import { Button, Input } from '../globals'
import { ProductQuantityAdderWrapper } from './styles'

export default function ProductQuantityAdder({ variantId, available}){
  const [ quantity, setQuantity ] = useState(1)
  const { updateLineItem } = useContext(CartContext)

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) })
  }

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          type="number" 
          min="1"
          step="1"
          value={quantity} 
          onChange={handleQuantityChange}
          disabled={!available}
        />
        <Button 
          type="submit" 
          fullWidth
          disabled={!available}
        >{available ? 'Agregar al carro' : 'Producto no disponible'}</Button>
      </form>
    </ProductQuantityAdderWrapper>
  )
}