import { graphql } from 'gatsby';

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    shopifyId
    title
    description
    tags
    images{
      id
      localFile{
        childImageSharp {
          fluid(maxHeight: 520, quality: 100){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;