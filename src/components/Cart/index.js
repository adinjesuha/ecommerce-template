import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import { CartWrapper, CartCount } from './styles'

export default function Cart(){
  const  { checkout } = useContext(CartContext)
  let totalQuantity = 0;
  if(checkout){
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity
    });
  }
  return (
    <CartWrapper>
      <CartCount data-header-cart-count={totalQuantity} isVisible={totalQuantity}/>
      <FaShoppingCart size="1.5em"/>
    </CartWrapper>
  )
}