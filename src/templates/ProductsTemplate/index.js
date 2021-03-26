/* eslint-disable jsx-a11y/no-onchange */
import React, { useContext } from 'react'
import Image from 'gatsby-image'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import CatalogProducts from './CatalogProducts'
import Pagination from '../../components/Pagination'
import { LayoutWrapper } from '../../components/globals'
import { HeaderBrand } from './styles'
import ProductContext from '../../context/ProductContext'

export default function ProductsTemplate({ pageContext }){
  const { collections } = useContext(ProductContext)
  const { currentPage, numPages, handle, limit, skip } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/${handle}` : `/${handle}/${(currentPage - 1).toString()}`
  const nextPage = `/${handle}/${(currentPage + 1).toString()}`

  const currentCollection = collections.filter(collection => collection.handle === handle)
  
  let products = [];
  currentCollection.forEach((node) => {
    products = [...products, ...node.products];
  });

  const { title, image } = currentCollection[0]

  return(
    <Layout>
      <SEO title={title} />
      <LayoutWrapper>
        {image && (
          <HeaderBrand>
            <Image fluid={image?.localFile.childImageSharp.fluid}/>
          </HeaderBrand>
        )}
        <CatalogProducts
          products={products}
          limit={limit}
          skip={skip}
          handle={handle}
        />
        {numPages > 1 && (
          <Pagination
            isFirst={isFirst} 
            isLast={isLast} 
            prevPage={prevPage} 
            numPages={numPages} 
            handle={handle}
            currentPage={currentPage} 
            nextPage={nextPage}
          />
        )}
      </LayoutWrapper>
    </Layout>
  )
}