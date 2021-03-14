import React from 'react'
import Layout from '../components/layout'
import CartContent from '../components/CartContent'
import SEO from '../components/seo'
import { LayoutWrapper } from '../components/globals'

const CartPage = () => {
  return  (
    <Layout>
      <SEO title="Cart" />
      <LayoutWrapper>
        <CartContent/>
      </LayoutWrapper>
    </Layout>
  )
}

export default CartPage