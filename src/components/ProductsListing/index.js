import React from "react"

import { ProductListingWrapper } from "./styles"
import ProductsListingItem from "../ProductListingItem"

const ProductsListing = ({products, hasFilters}) => {
  return (
    <ProductListingWrapper hasFilters={hasFilters}>
      {products.map((product) => (
        <ProductsListingItem key={product.shopifyId} product={product} />
      ))}
    </ProductListingWrapper>
  )
}

export default ProductsListing
