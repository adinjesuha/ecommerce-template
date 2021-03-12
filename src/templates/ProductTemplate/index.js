/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { navigate, useLocation } from '@reach/router'
import queryString from 'query-string'
import CartContext from '../../context/CartContext'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import ImageGallery from '../../components/ImageGallery'
import ProductQuantityAdder from '../../components/ProductQuantityAdder'
import { Grid, SelectWrapper, Price } from './styles'
import { LayoutWrapper } from '../../components/globals'

export default function ProductTemplate({data}){
  const { getProductById } = useContext(CartContext)
  const { title, images, shopifyId, description } = data.shopifyProduct
  
  const [ product, setProduct ] = useState(null)
  const [ selectedVariant, setSelectedVariant ] = useState(null)

  const { search, origin, pathname  } = useLocation()
  const variantId = queryString.parse(search).variant

  useEffect(() => {
    getProductById(shopifyId).then((res) => {
      setProduct(res)
      setSelectedVariant(res.variants.find(({id}) => id === variantId) || res.variants[0])
    })
  }, [getProductById, setProduct, shopifyId, variantId])

  const handleVariantChange = e => {
    const newVariant = product?.variants.find( v => v.id === e.target.value)
    setSelectedVariant(newVariant)
    navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`, {
      replace: true
    })
  }

  return(
    <Layout>
      <SEO description={data.shopifyProduct.description} title={data.shopifyProduct.title} />
      <LayoutWrapper>
        <Grid>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {product?.availableForSale && !!selectedVariant && (
              <>
              { product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  <select value={selectedVariant.id} onChange={handleVariantChange}>
                    {product?.variants.map(v => (
                      <option key={v.id} value={v.id}>{v.title}</option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
              {!!selectedVariant && (
                <>
                  <Price>L. {selectedVariant.price}</Price>
                  <ProductQuantityAdder 
                    available={selectedVariant.available} 
                    variantId={selectedVariant.id}
                  />
                </>
              )}
              </>
            )}
          </div>
          <div>
            <ImageGallery selectedVariantImageId={selectedVariant?.image.id} images={images}/>
          </div>
        </Grid>
      </LayoutWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($shopifyId: String){
    shopifyProduct(shopifyId: {eq: $shopifyId}){
      description
      ...ShopifyProductFields
    }
  }
`;