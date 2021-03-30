import React from 'react'
import { ProductContextProvider } from './src/context/ProductContext'
import { CartContextProvider } from './src/context/CartContext'
import { MenuContextProvider } from './src/context/MenuContext'
import { GlobalStyle } from './src/components/globals'

export const wrapRootElement = ({ element }) => (
  <MenuContextProvider>
    <ProductContextProvider>
      <CartContextProvider>{element}</CartContextProvider>
    </ProductContextProvider>
  </MenuContextProvider>
)

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);