import React, { useContext } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductContext from '../context/ProductContext'
import HomePageCollectionsGrid from "../components/HomePageCollectionsGrid"
import ProductsListing from "../components/ProductsListing"

const IndexPage = () => {
  const { collections, products } = useContext(ProductContext)
  return (
    <Layout>
      <SEO title="Home" />
      <HomePageCollectionsGrid 
        collections={
          collections.filter(collection => collection.image !== null)
        }
      />
      <ProductsListing products={products} isPage/>
    </Layout>
  )
}

export default IndexPage
