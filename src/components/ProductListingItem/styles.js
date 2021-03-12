import styled from 'styled-components'

export const ProductItemWrapper = styled.article`
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 0 #ccc;
  border-radius: 5px;
  a{
    margin: 0 !important;
    text-decoration: none;
    color: #000;
  }
`

export const ProductItemContent = styled.div`
  background: #fff;
  padding: 15px 15px 50px;
  position: relative;
  .image-wrapper{
    /* background-color: red; */
    height: 220px;
    .gatsby-image-wrapper{
      height: 100%;
    }
  }
`

export const ProductInfo = styled.div`
  width: 100%;
  margin-top: 1rem;
  > h2{
    font-size: 0.9rem;
    font-weight: 400;
    text-align: left;
    line-height: 1.4em;
    padding: 0px;
    margin: 10px 0px;
    min-height: 82px;
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
  .product-price{
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0px;
    padding: 10px 15px;
    > p{
      font-size: 1.2em;
      font-weight: 400;
      text-align: left;
      padding: 8px 0px;
      color: #d0011b;
      font-weight: 700;
      margin-right: 5px;
    }
  }
`