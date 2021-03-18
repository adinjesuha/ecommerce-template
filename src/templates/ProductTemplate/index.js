/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useContext } from 'react'
import { graphql, Link } from 'gatsby'
import { navigate, useLocation } from '@reach/router'
import queryString from 'query-string'
import loadable from '@loadable/component';
import CartContext from '../../context/CartContext'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import ImageGallery from '../../components/ImageGallery'
import ProductQuantityAdder from '../../components/ProductQuantityAdder'
import { Grid, SelectWrapper, Price, ShareButtonsSection } from './styles'
import { LayoutWrapper } from '../../components/globals'
import Breadcrumbs from '../../components/Breadcrumbs'

const ShareButtons = loadable(() => import('../../components/ShareButtons'));

export default function ProductTemplate({data, location}){
  const { getProductById } = useContext(CartContext)
  const { title, images, shopifyId, description, vendor } = data.shopifyProduct
  
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

  const shareButtons = [
    'Facebook',
    'Twitter',
    'Whatsapp',
  ]

  return(
    <Layout>
      <SEO description={data.shopifyProduct.description} title={data.shopifyProduct.title} />
      <LayoutWrapper>
        <Breadcrumbs
          productTitle={title}
          collectionTitle={data.shopifyCollection?.title}
          collectionPath={data.shopifyCollection?.handle}
          separator="/"
        />
        <Grid>
          <div>
            <header>
              <h1>{title}</h1>
              <p>por <Link to="/">{vendor}</Link></p>
            </header>
            <ImageGallery selectedVariantImageId={selectedVariant?.image.id} images={images}/>
          </div>
          <div>
            <div className="meta-description">
              <h1>{title}</h1>
              <p>por <Link to="/">{vendor}</Link></p>
              <p>{description}</p>
            </div>
            {!!selectedVariant && (
              <Price>L. {selectedVariant.price}</Price>
            )}
            {product?.availableForSale && !!selectedVariant && (
              <>
              { product?.variants.length > 1 && (
                <>
                  <SelectWrapper>
                    <strong>{selectedVariant?.selectedOptions[0].name}</strong>
                    {product?.variants.map(v => (
                      <div key={v.id}>
                        <input 
                          type="radio"
                          readOnly="readonly"
                          name="option" 
                          id={v.id}
                          value={v.id} 
                          onChange={handleVariantChange}
                        />
                        <label 
                          htmlFor={v.id}
                          className={selectedVariant?.id === v.id ? 'selected-option' : ''}
                        >
                          <span>Click to select</span>
                          <span>{v.title}</span>
                        </label>
                      </div>
                    ))}
                  </SelectWrapper>
                </>
              )}
              </>
            )}
            {!!selectedVariant && (
              <ProductQuantityAdder 
                available={selectedVariant.available} 
                variantId={selectedVariant.id}
              />
            )}
            <ShareButtonsSection>
              <p>Compartelo: </p>
              <ShareButtons buttons={shareButtons} location={location.href} />
            </ShareButtonsSection>
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
    shopifyCollection(products: {elemMatch: {shopifyId: {eq: $shopifyId}}}) {
      handle
      title
    }
  }
`;