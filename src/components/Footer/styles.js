import styled from 'styled-components'

import { device } from '../../utils/breakpoints'

export const FooterWrapper = styled.footer`
  background-color: var(--blue-brand);
  color: #fff;
  padding-top: .75em;
  width: 100%;
  .site-footer-credits {
    color: #dcdcdc;
    font-size: 0.8125rem;
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 0;
  }
  @media ${device.laptop}{
    padding-top: 3.25em;
  }
`

export const FooterBlocks = styled.div`
  .footer-item {
    border-bottom: 1px solid rgba(255, 245, 241, 0.15);
    > h3 {
      font-size: 1.05469rem;
      font-weight: bold;
      padding-bottom: 1rem;
      padding-top: 1.25rem;
      margin-top: 0;
      margin-bottom: 0;
      position: relative;
    }
    > div {
      padding-bottom: 1.25rem;
      line-height: 1.8;
      ul {
        li a {
          font-weight: lighter;
          color: #dcdcdc;
          text-decoration: none;
        }
      }
      form{
        input {
          margin-bottom: 1rem;
          width: 100%;
        }
        button {
          display: inline-block;
          width: 100%;
        }
      }
    }
    > p{
      color: #dcdcdc;
      padding-bottom: 0;
      margin-bottom: 1.25rem;
      line-height: 1.6;
    }
  }
  @media ${device.mobileL}{
    .footer-item {
      > div {
        form {
          input {
            display: inline-block;
            margin-bottom: 0;
            margin-right: 10px;
            width: calc(67% - 20px);
            min-width: 190px;
          }
          button {
            width: auto;
          }
        }
      }
    }
  }
  @media ${device.laptop}{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding-bottom: 3.25rem;
    border-bottom: 1px solid rgba(255, 245, 241, 0.15);
    .footer-item {
      flex-basis: auto;
      flex-shrink: 0;
      padding-right: 1.25rem;
      margin-right: 1.25rem;
      border-bottom: 0;
      width: calc(20% - 1rem);
      &:last-child{
        width: calc(40% - 1rem);
      }
      > h3 {
        padding: 1rem 0;
      }
    }
  }
`