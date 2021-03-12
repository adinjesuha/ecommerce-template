import React from 'react';

import { ProductListingWrapper } from '../../../components/ProductsListing/styles';
import ProductsListingItem from '../../../components/ProductListingItem';


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