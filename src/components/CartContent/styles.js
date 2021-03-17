import styled from 'styled-components'

import { device } from '../../utils/breakpoints'

export const CartHeader = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  font-weight: bold;
  > div{
    padding: 8px;
  }
`

export const CartFooter = styled.div`
  margin-top: 2rem;
  margin-top: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div:first-child{
    order: 2;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    > button {
      width: 100%;
    }
  }
  div:last-child{
    width: 100%;
    margin-bottom: 30px;
    > div {
      display: inline-block;
      width: 100%;
      > button {
        width: 100%;
      }
    }
    > div:last-child{
      margin-top: 25px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      strong{
        font-size: 1.5rem;
      } 
    }
  }
  @media ${device.tablet}{
    flex-wrap: nowrap;
    div:first-child{
      order: initial;
      width: 450px;
      margin-bottom: 0;
      width: auto;
    }
    div:last-child{
      width: 350px;
      margin-bottom: 0;
    }
  }
`

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  > div:last-child{
    text-align: right;
  }
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  border-bottom: 1px solid #ddd;
  position: relative;
  
  margin: 0 -20px;
  flex-wrap: wrap;
  padding: 30px 20px;
  .image{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 98px;
    height: 98px;
    margin-right: 15px;
    border-radius: 4px;
    border: 1px solid #e2ebef;
    text-decoration: none;
    order: 1;
    > img{
      max-height: 85%;
    }
  }
  .info{
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: flex-start;
    padding-right: 10px;
    color: #232930;

    width: calc(100% - 115px);
    order: 2;
    padding-right: 25px;
    > div:first-child{
      font-weight: bold;
    }
    > div:last-child{
      color: var(--black-60);
    }
  }
  .price{
    color: var(--red-brand);
    font-size: 0.938rem;
    font-weight: 500;

    width: 100%;
    padding-left: 115px;
    margin-top: 5px;
    order: 3;
  }
  .quantity{
    order: 4;
    margin: 20px 0;
    width: 100px;
  }
  .price-total{
    font-size: 1.125rem;
    font-weight: 600;

    order: 6;
    width: calc(100% - 115px);
    text-align: right;
  }
  .remove{
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px;
  }
  @media ${device.mobileL}{
    .price{
      order: 5;
      width: calc(50% - 65px);
      text-align: left;
      padding-left: 0;
      margin-top: 0;
    }
    .price-total{
      width: calc(50% - 75px);
      text-align: right;
    }
  }
  @media ${device.laptop}{
    margin: 0;
    padding: 15px 0;
    div {
      order: initial !important;
    }
    .info{
      width: calc(100% - 680px);
      padding-right: 0;
    }
    .price {
      width: 200px;
      text-align: right;
    }
    .quantity{
      margin: 0 25px;
      width: auto;
    }
    .price-total{
      font-size: 1.125rem;
      font-weight: 600;
      width: 190px;
      text-align: left;
      padding-right: 70px;
    }
  }
`