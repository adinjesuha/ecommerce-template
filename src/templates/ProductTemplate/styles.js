import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const Grid = styled.section`
  > div:first-child{
    header {
      font-size: 1rem;
      margin: 0 0 20px;
      h1{
        font-size: inherit;
        font-weight: 700;
        text-align: left;
        line-height: 1.3em;
        color: var(--black);
        margin-bottom: 10px;
      }
      p > a {
        color: var(--red-brand);
        text-decoration: none;
      } 
    }
  }
  > div:last-child{
    .meta-description{
      display: none;
    }
  }
  @media ${device.tablet}{
    display: flex;
    > div:first-child{
      width: 50%;
      margin-right: 30px;
      header{
        display: none;
      }
    }
    > div:last-child{
      width: 50%;
      p:last-child {
        margin-top: 30px !important;
      }
      .meta-description{
        display: block;
        h1{
          font-weight: bold;
          font-size: 1.4rem;
          line-height: 1.2em;
          margin-bottom: 0;
          display: block;
        }
        p:nth-of-type(1){
          display: inline-block;
          a{
            color: var(--red-brand);
            text-decoration: none;
          }
        }
      }
    }
  }
` 

export const SelectWrapper = styled.div`
  margin-top: 10px;
  > strong {
    display: block;
    margin-bottom: 20px;
  }
  > div {
    display: inline-block;
    position: relative;
    min-height: 3rem;
    margin-top: -0.4375em;
    input {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      display: inline-block;
      min-height: 0;
    }
    label{
      display: block;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      margin-bottom: .6rem;
      margin-right: .6rem;
      touch-action: manipulation;
      background: #ffffff;
      color: #333333;
      border: 0.1rem solid #ddd;
      box-shadow: 0 0.1rem 0 0 #dddddd;
      cursor: pointer;
      > span:first-child{
        pointer-events: none;
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        border: 0;
      }
    }
    label.selected-option {
      font-weight: 600;
      background-color: #fbf3e6;
      color: #333333;
      border-color: #f5a623;
      box-shadow: 0 0.1rem 0 0 #f5a623;
    }
  }
  @media ${device.tablet}{
    > div {
      display: inline-block;
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 400;
      color: var(--black);
      border: none;
      margin: 0rem;
      padding: 0rem;
      margin-bottom: 1em;
    }
  }
`

export const Price = styled.div`
  margin: 40px 0;
  line-height: inherit;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: bold;
`

export const ShareButtonsSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  > p{
    margin-right: 1rem;
  }
  + p {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.6em;
    color: var(--black);
  }
`