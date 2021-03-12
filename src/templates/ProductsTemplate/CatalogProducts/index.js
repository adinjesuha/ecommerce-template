import React from 'react';
import styled from 'styled-components'

import ProductsListingItem from '../../../components/ProductsListing/ProductsListingItem';


const ProductListingWrapper = styled.div`
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

const CatalogProducts = ({ products, limit, skip, cartUrl }) => {
  return (
    <ProductListingWrapper>
      {products.map((product, index) => {
        product.cartUrl = cartUrl;
        if (index + 1 > skip && index + 1 <= skip + limit) {
          return (
            <ProductsListingItem key={product.shopifyId} product={product}/>
          );
        } else {
          return '';
        }
      })}
    </ProductListingWrapper>
  );
};

export default CatalogProducts;