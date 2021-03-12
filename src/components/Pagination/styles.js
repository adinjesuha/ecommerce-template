import styled from 'styled-components'

export const PaginationWrapper = styled.nav`
  max-width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-top: 3.125rem;
  margin-bottom: 1.75rem;
  > ul{
    padding-left: 0;
    margin-right: -0.5625rem;
    margin-left: -0.5625rem;
    font-size: 0;
    color: #3c3761;
    text-align: center;
    li:not(:last-child){
      margin-right: 0.3125rem;
    }
    li:first-of-type a span{
      margin-left: 0;
      margin-right: 0.3125rem;
    }
    li{
      font-size: 0.9375rem;
      display: inline-block;
      > span.current-item{
        color: #3c3761;
        font-weight: bold;
        text-align: center;
        padding: 0.5625rem 0.6875rem;
      }
      > a{
        display: inline-block;
        padding: 0.5625rem 0.6875rem;
        text-decoration: none;
        color: #ff274e;
        text-decoration: none;
        transition: color 0.1s ease;
        > span{
          display: inline-block;
          margin-left: 0.3125rem;
          vertical-align: middle;
          > svg{
            display: block;
            fill: currentColor;
          }
        }
      }
    }
  }
`