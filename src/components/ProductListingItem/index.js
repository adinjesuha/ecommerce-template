import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { ProductItemContent, ProductItemWrapper, ProductInfo } from './styles'

const ProductsListingItem = ({ product }) => {
  console.log(product)
  const {
    images: [firstImage],
    variants
  } = product
  return (
    <ProductItemWrapper>
      <Link
        to={`/products/${product.handle}`}
        style={{ display: "block", marginBottom: "2rem" }}
      >
        <ProductItemContent>
          <div className="image-wrapper">
            <Image 
              fluid={firstImage.localFile.childImageSharp.fluid} 
              alt={product.title}
              style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <ProductInfo>
            {variants.length > 1 ? (
              <span className="product-choices">Opciones Disponibles</span>
            ) : (
              <span className="product-choices--placeholder" />
            )}
            <h2>{product.title}</h2>
            <div className="product-price">
              <p><span>L. </span>{variants[0].price}</p>
            </div>
          </ProductInfo>
        </ProductItemContent>
      </Link>
    </ProductItemWrapper>
  )
}

export default ProductsListingItem