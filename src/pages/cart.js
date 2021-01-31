import React from 'react'
import Layout from '../components/layout'
import CartContent from '../components/CartContent'
import SEO from '../components/seo'

const CartPage = () => {
  return  (
    <Layout>
      <SEO title="Cart" />
      <CartContent/>
    </Layout>
  )
}

export default CartPage