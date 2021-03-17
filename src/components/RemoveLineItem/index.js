import React, { useContext } from 'react'
import { MdClear } from 'react-icons/md'
import CartContext from '../../context/CartContext'
import { Icon } from './styles'

export default function RemoveLineItem({lineItemId}){
  const { removeLineItem } = useContext(CartContext)
  const handleClick = () => {
    removeLineItem(lineItemId)
  }
  return (
    <Icon onClick={handleClick}>
      <MdClear />
    </Icon>
  )
}