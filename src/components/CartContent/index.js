import React, { useContext } from 'react'
import { navigate } from 'gatsby-link'
import CartContext from '../../context/CartContext'
import { CartItem, CartFooter } from './styles'
import QuantityAdjuster from '../QuantityAdjuster'
import RemoveLineItem from '../RemoveLineItem'
import { Button } from '../globals'

export default function CartContent() {
  const { checkout, updateLineItem } = useContext(CartContext)
  const handleAdjustQuantity = ({quantity, variantId}) => {
    updateLineItem({ quantity, variantId })
  }
  return (
    <section>
      <h1>Mi carrito</h1>
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div className="image">
            <img 
              src={item.variant.image.src}
              alt={item.title}
            />
          </div>
          <div className="info">
            <div>{item.title}</div>
            <div>{item.variant.title === 'Default Title' ? '' : item.variant.title}</div>
          </div>
          <div className="price">Lps. {item.variant.price}</div>
          <div className="quantity">
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity}/>
          </div>
          <div className="price-total">Lps. {(item.quantity * item.variant.price).toFixed(2)}</div>
          <div className="remove">
            <RemoveLineItem lineItemId={item.id}/>
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems.length && (
        <CartFooter>
          <div>
            <Button secondary onClick={() => navigate("/")}>Seguir comprando</Button>
          </div>
          <div>
            <div>
              {!!checkout?.webUrl && (
                <Button onClick={() => {
                  window.location.href = checkout.webUrl
                }}>Checkout</Button>
              )}
            </div>
            <div>
              <span>Total:</span>
              <strong>Lps. {checkout?.totalPrice}</strong>
            </div>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems.length && (
        <>
          <h4>Tu carro esta vacio.</h4>
          <div>
            <Button onClick={() => navigate("/")}>Seguir comprando</Button>
          </div>
        </>
      )}
    </section>
  )
}