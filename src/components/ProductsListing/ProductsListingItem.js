import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'

const ProductItem = styled.article`
  a{
    margin: 0 !important;
    text-decoration: none;
    color: #000;
    .image-wrapper{
      /* background-color: red; */
      height: 220px;
      position: relative;
      .gatsby-image-wrapper{
        height: 100%;
      }
    }
    h3{
      font-size: 1rem;
    }
  }
`

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage]
  } = product
  return (
    <ProductItem>
      <Link
        to={`/products/${product.handle}`}
        style={{ display: "block", marginBottom: "2rem" }}
      >
        <div className="image-wrapper">
          <Image 
            fluid={firstImage.localFile.childImageSharp.fluid} 
            alt={product.title}
            style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>
        <h3 className="title is-3">{product.title}</h3>
      </Link>
    </ProductItem>
  )
}

export default ProductsListingItem
