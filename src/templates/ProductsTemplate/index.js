/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'

import SEO from '../../components/seo'
import Layout from '../../components/layout'

export default function ProductTemplate(props){
  console.log(props)
  return(
    <Layout>
      <h1>Template</h1>
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery($limit: Int, $skip: Int){
    allShopifyProduct(limit: $limit, skip: $skip){
      edges {
        node {
          title
        }
      }
    }
  }
`;