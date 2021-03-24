import styled, { css } from 'styled-components'
import { device } from '../../../utils/breakpoints'

export const MenuLinksWrapper = styled.ul`
  display: none;
  @media ${device.laptop}{
    list-style: none;
    display: block;
    height: 70px;
    margin: -10px 0;
    margin-left: 2rem;
    > li {
      display: inline-block;
      height: 100%;
      transition-duration: 0.5s;
      .menu-container {
        display: inline-block;
        line-height: 70px;
        height: 70px;
        padding: 0 10px;
        position: relative;
        &:after {
          content: '';
          display: none;
          height: 2px;
          background-color: var(--red-brand);
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0px;
          right: 0px;
        }
      }
      &:hover{
        .menu-container{
          text-decoration: none;
          &:after{
            display: block;
          }
        }
        &:hover > div, :focus-within > div {
          visibility: visible;
          opacity: 1;
          display: block;
        }
      }
    }
  }
`

export const SubMenu = styled.div`
  display: none;
  background-color: #fff;
  box-shadow: rgb(130 136 148 / 12%) 0px 0px 0px 1px, rgb(130 136 148 / 24%) 0px 8px 12px -4px;
  visibility: hidden;
  opacity: 0;
  margin-top: 1px;
  position: absolute;
  left: 0;
  right: 0;
  transition: all .3s ease;
  .subMenu-wrapper{
    display: flex;
    justify-content: center;
    .subMenu-grid{
      max-width: 1180px;
      width: 100%;
      padding: 36px 0px;
      margin: 0px 20px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 20px;
    }
  }
  &:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  
`

export const SubMenuItem = styled.div`
  grid-column: 1 / 3;
  &:nth-child(2){
    grid-column: 3 / 5;
  }
  &:nth-child(3){
    grid-column: 5 / 7;
  }
  &:nth-child(4){
    grid-column: 7 / 9;
  }
  > div {
    font-size: 0.875rem;
    color: var(--black);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }
  > ul{
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
      clear: both;
      width: 100%;
      > a{
        letter-spacing: 0.011rem;
        font-size: 0.85rem;
        line-height: 1.3rem;
        color: rgb(130, 136, 148) !important;
        text-decoration: none;
        display: block;
        padding: 6px 0px;
      }
      &:hover > a {
        color: var(--red-brand) !important;
        text-decoration: none !important;
      }
    }
  }
  ${props => props.featured && css `
      grid-column: 9 / 13 !important;
      > div {
        font-weight: normal;
        margin-bottom: 0;
      }
      > div:first-child:not(:last-child) {
        margin-bottom: 10px;
      }
  `}
`