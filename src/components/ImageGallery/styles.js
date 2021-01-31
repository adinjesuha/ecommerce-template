import styled from 'styled-components'

export const ImageGalleryWrapper = styled.section`
  .selected-image{
    border: 5px solid #ccc;
    height: 500px;
    .gatsby-image-wrapper{
      height: 100%;
    }
  }
  > div:last-child{
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    /* @media(min-width: 768px){
      grid-template-columns: 1fr 1fr 1fr;
    } */
    @media(min-width: 1024px){
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`