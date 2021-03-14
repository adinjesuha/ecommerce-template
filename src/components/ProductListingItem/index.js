import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { 
  ProductItemWrapper, 
  ProductItemContainer, 
  ProductContentLeft, 
  ProductContentRight, 
  ProductInfo 
} from './styles'

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants,
    vendor
  } = product
  return (
    <ProductItemWrapper>
      <Link
        to={`/products/${product.handle}`}
        style={{ display: "block", marginBottom: "2rem" }}
      >
        <ProductItemContainer>
          <ProductContentLeft>
            <div className="image-wrapper">
              <Image 
                fluid={firstImage.localFile.childImageSharp.fluid} 
                alt={product.title}
                style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            {variants.length > 1 ? (
              <span className="product-choices">Más opciones disponibles</span>
            ) : (
              <span className="product-choices--placeholder" />
            )}
          </ProductContentLeft>
          <ProductContentRight>
            <h2>{product.title}, {variants[0].title}</h2>
            <ProductInfo>
              <p className="product-vendor">{vendor}</p>
              <p className="product-price"><span>L. </span>{variants[0].price}</p>
            </ProductInfo>
          </ProductContentRight>
        </ProductItemContainer>
      </Link>
    </ProductItemWrapper>
  )
}

export default ProductsListingItem