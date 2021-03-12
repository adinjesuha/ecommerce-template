import React, { useContext } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductContext from '../context/ProductContext'
import HomePageCollectionsGrid from "../components/HomePageCollectionsGrid"
import HeroSlider from "../components/HeroSlider"
import { LayoutWrapper } from "../components/globals"

const IndexPage = () => {
  const { collections } = useContext(ProductContext)
  return (
    <Layout>
      <SEO title='Inicio' />
      <HeroSlider 
        collections={
          collections.filter(collection => collection.image !== null)
        }
      />
      <LayoutWrapper>
        <HomePageCollectionsGrid
          collections={
            collections.filter(collection => collection.image !== null)
          }
        />
      </LayoutWrapper>
    </Layout>
  )
}

export default IndexPage