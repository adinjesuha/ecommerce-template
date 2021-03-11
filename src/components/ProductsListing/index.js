import React from "react"
import ProductsListingItem from "./ProductsListingItem"

import styled from 'styled-components'

const ListingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media(min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(min-width: 1024px){
    grid-template-columns: ${props => props.isPage ? '1fr 1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr'};
  }
`

const ProductsListing = ({products, isPage}) => {
  return (
    <ListingWrapper>
      {products.map((product) => (
        <ProductsListingItem key={product.shopifyId} product={product} />
      ))}
    </ListingWrapper>
  )
}

export default ProductsListing
