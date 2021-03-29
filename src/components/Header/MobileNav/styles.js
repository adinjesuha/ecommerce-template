import styled from 'styled-components'
import { device } from '../../../utils/breakpoints'

export const MobileMenuWrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: calc(100% + 1px);
  height: calc(100vh - 100%);
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  .mobileNavigation-outer {
    position: relative;
    flex: 1 1 0%;
    display: flex;
    overflow-y: hidden;
    > div {
      flex: 1 1 0%;
      overflow-y: ${props => props.openMenu ? 'hidden' : 'auto'};
    }
  }
  .mobileNavigation-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0px;
    > div:first-child {
      
    }
    > div:last-child {
      margin-top: 18px;
      span {
        font-size: 0.75rem;
        color: rgb(91, 103, 112);
      }
    } 
  }
  @media ${device.laptop}{
    display: none;
  }
`

export const MenuItem = styled.li`
  border-bottom: 1px solid #eee;
  > button {
    width: 100%;
    border: none;
    background-color: white;
    padding: 18px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:focus {
      outline: none;
    }
    > div:first-child{
      color: var(--black);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      font-size: 1rem;
      font-weight: bold;
    }
    > div:last-child {
      display: flex;
    }
  }
  a {
    width: 100%;
    border: none;
    background-color: white;
    padding: 18px 20px;
    display: flex;
    text-decoration: none;
    > div {
      color: var(--black);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      font-size: 1rem;
      font-weight: bold;
    }
  }
`

export const MobileSubMenuWrapper = styled.div`
  position: absolute;
  inset: 0px;
  background-color: white;
  flex-direction: column;
  display: flex;
  > button {
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    background-color: white;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    > div:first-child{
      display: flex;
    }
    > div:last-child{
      color: var(--black);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      font-size: 1rem;
      font-weight: bold;
    }
  }
  > div{
    flex: 1 1 0%;
    overflow-y: auto;
    
  }
`

export const SubMenuItem = styled.li`
  border-bottom: 1px solid #eee;
  > button {
    width: 100%;
    border: none;
    background-color: white;
    padding: 18px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:focus{
      outline: none;
    }
    > div:first-child {
      color: var(--black);
      text-transform: uppercase;
      letter-spacing: 0.6px;
      font-size: 1rem;
      font-weight: bold;
    }
  }
  > ul {
    margin-bottom: 15px;
    li a{
      display: block;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 8px;
      text-decoration: none;
      color: rgb(130, 136, 148);
      font-size: 1rem;
      &:first-child{
        padding-top: 5px;
      }
    }
  }
`