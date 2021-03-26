import React, { useContext } from "react"

import { LayoutWrapper } from "../components/globals"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductContext from '../context/ProductContext'
import HeroSlider from "../components/HeroSlider"
import Brands from "../components/Brands"
import ProductsSlider from "../components/ProductsSlider"
import SectionWrapper from '../components/SectionWrapper'
import HomePageCollectionsGrid from "../components/HomePageCollectionsGrid"

const IndexPage = () => {
  const { collections } = useContext(ProductContext)
  const promos = collections.filter(collection => 
    collection.image !== null && 
    collection.title !== "Perros" &&
    collection.title !== "Gatos"
  )
  return (
    <Layout>
      <SEO title='Inicio' />
      <HeroSlider collections={promos} />
      <LayoutWrapper>
        <SectionWrapper>
          <Brands />
        </SectionWrapper>
        <SectionWrapper>
          <ProductsSlider 
            name="Destacados"
            collection={
              collections.filter(collection => collection.title === "Destacados")
            }
          />
        </SectionWrapper>
        <SectionWrapper>
          <HomePageCollectionsGrid 
            collections={
              collections.filter(collection => 
                collection.title === "Gatos" || 
                collection.title === "Perros" 
              )
            }
          />
        </SectionWrapper>
      </LayoutWrapper>
    </Layout>
  )
}

export default IndexPage