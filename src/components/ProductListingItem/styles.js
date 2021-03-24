import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const ProductItemWrapper = styled.article`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  margin-left: -20px;
  margin-right: -20px;
  a{
    margin: 0 !important;
    text-decoration: none;
    color: #000;
  }
  @media ${device.mobileL}{
    border: 1px solid #ddd;
    box-shadow: 0 1px 0 #ccc;
    border-radius: 5px;
    margin-left: 0;
    margin-right: 0;
  }
`

export const ProductItemContainer = styled.div`
  background: #fff;
  padding: 15px;
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 5px;
  @media ${device.mobileL}{
    padding: 15px 15px 50px;
    flex-direction: column;
  }
`

export const ProductContentLeft = styled.div`
  width: 30%;
  .image-wrapper{
    margin-bottom: 10px;
    height: 150px;
    .gatsby-image-wrapper{
      height: 100%;
      margin: 0 !important;
    }
  }
  .product-choices {
    display: block;
    font-size: 0.7em;
    text-align: center;
    line-height: 1em;
    color: rgb(102, 102, 102);
    background: rgb(249, 249, 249) none repeat scroll 0% 0%;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 3px;
    padding: 5px 10px;
  }
  .product-choices--placeholder{
    display: block;
    padding: 0;
    height: 23px;
    border-radius: 0px;
    border: 0px solid transparent;
    background: transparent;
  }
  @media ${device.mobileL}{
    width: 100%;
    .image-wrapper{
      height: 220px;
      width: 100%;
    }
  }
`

export const ProductContentRight = styled.div`
  width: 70%;
  padding-left: 20px;
  > h2{
    font-size: 0.9rem;
    font-weight: 400;
    text-align: left;
    line-height: 1.4em;
    padding: 0px;
    margin: 10px 0px;
    
  }
  @media ${device.mobileL}{
    width: 100%;
    margin-top: 1rem;
    padding-left: 0;
    > h2 {
      min-height: 82px;
    }
  }
`

export const ProductInfo = styled.div`
  width: 100%;
  .product-price{
    font-size: 1.2em;
    font-weight: 400;
    text-align: left;
    color: #d0011b;
    font-weight: 700;
  }
  .product-vendor{
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 4px;
  }
  @media ${device.mobileL}{
    padding: 10px 15px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`