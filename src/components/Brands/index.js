import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Brand, BrandsContainer } from './styles'

const Brands = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "brands"}}
      ) {
        edges {
          node {
            base
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return(
    <BrandsContainer>
      <h3>Marcas populares</h3>
      {data.allFile.edges.map((image, i) => (
        <Brand key={i} to={image.node.name}>
          <Img fluid={image.node.childImageSharp.fluid}/>
        </Brand>
      ))}
    </BrandsContainer>
  )
}

export default Brands