import styled from 'styled-components'
import { Link } from "gatsby"

import { device } from '../../../utils/breakpoints'

export const ItemWrapper = styled.article`
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  padding: 0 .3rem;
  width: 100%;
  position: relative;
  @media ${device.tablet}{
    padding-right: .8rem;
  }
`

export const ItemContainer = styled(Link)`
  display: block;
  color: #333;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 0 #ccc;
  border-radius: 4px;
  margin-bottom: 0;
  padding: 1rem 1rem 1rem .5rem;
  padding-left: 1rem;
  height: 100%;
  position: relative;
  text-decoration: none;
  .image-wrapper{
    height: 150px;
    margin-bottom: 1.5rem;
    .gatsby-image-wrapper{
      height: 100%;
      margin: 0 !important;
    }
  }
  .product-info{
    position: relative;
    max-width: 100%;
    flex-basis: 100%;
    padding-bottom: 3rem;
    > p:first-child{
      color: var(--black);
      font-size: 14px;
      height: 2.8rem;
    }
    > p:last-child{
      position: absolute;
      bottom: 0;
      font-size: 1.2rem;
      color: var(--red-brand);
      > span {
        color: rgba(0, 0, 0, .5);
        display: block;
        font-size: 14px;
      }
    }
  }
  @media ${device.mobileL}{
    .product-info{
      padding-bottom: 3.2rem;
      > p:first-child{
        height: 3.2rem;
      }
    }
  }
`