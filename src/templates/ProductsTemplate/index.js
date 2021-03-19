/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import CatalogProducts from './CatalogProducts'
import Pagination from '../../components/Pagination'
import { LayoutWrapper } from '../../components/globals'
import { HeaderBrand } from './styles'

export default function ProductsTemplate({pageContext, data}){
  const { currentPage, numPages, handle, limit, skip } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/${handle}` : `/${handle}/${(currentPage - 1).toString()}`
  const nextPage = `/${handle}/${(currentPage + 1).toString()}`
  
  let products = [];
  data.collection.nodes.forEach((node) => {
    products = [...products, ...node.products];
  });

  return(
    <Layout>
      <SEO title={data.collection.nodes[0].title} />
      <HeaderBrand>
        <Image fluid={data.collection.nodes[0].image.localFile.childImageSharp.fluid}/>
      </HeaderBrand>
      <LayoutWrapper>
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

export const query = graphql`
  query CatalogQuery($handle: String) {
    collection: allShopifyCollection(filter: { handle: { eq: $handle } }) {
      nodes {
        products {
          ...ShopifyProductFields
          ...ProductTileFields
        }
        title
        description
        shopifyId
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    store: site {
      siteMetadata {
        title
      }
    }
  }
`;