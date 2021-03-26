import React from 'react'
import Image from "gatsby-image"

import { ItemWrapper, ItemContainer } from './styles'

const ProductsSliderItem = ({product}) => {
  const {
    images: [firstImage],
    variants,
    title
  } = product
  return(
    <ItemWrapper>
      <ItemContainer to={`/products/${product.handle}`}>
        <div className="image-wrapper">
          <Image 
            fluid={firstImage.localFile.childImageSharp.fluid} 
            alt={product.title}
            style={{ 
              margin: '1rem', 
              maxHeight: 'calc(50vh - 4rem)'
            }}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>
        <div className="product-info">
          <p>{title}</p>
          <p>
            {variants.length > 1 && <span>Desde</span>}
            <strong>L. {variants[0].price}</strong>
          </p>
        </div>
      </ItemContainer>
    </ItemWrapper>
  )
}

export default ProductsSliderItem