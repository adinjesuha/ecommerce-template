import React from 'react';

import { ProductListingWrapper } from '../../../components/ProductsListing/styles';
import ProductsListingItem from '../../../components/ProductListingItem';


const CatalogProducts = ({ products, limit, skip, handle }) => {
  return (
    <ProductListingWrapper>
      {products.map((product, index) => {
        if (index + 1 > skip && index + 1 <= skip + limit) {
          return (
            <ProductsListingItem key={product.shopifyId} product={product} handle={handle}/>
          );
        } else {
          return '';
        }
      })}
    </ProductListingWrapper>
  );
};

export default CatalogProducts;