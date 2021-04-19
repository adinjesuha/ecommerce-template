import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Image from '../components/image'
import SEO from "../components/seo"
import Layout from "../components/layout"
import { device } from "../utils/breakpoints"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 0 3.2rem;
  min-height: 50vh;
  > div:first-child{
    width: 100%; 
  }
  > div:last-child {
    text-align: center;
    margin-bottom: 2.4rem;
    h1 {
      margin-bottom: 1.6rem;
      padding-top: 1.25rem;
      font-size: 5.4rem;
    }
    a {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      padding: 14px 35px;
      border-radius: 4px;
      font-size: 1.1rem;
      background-color: var(--red-brand);
      color: #fff;
      font-weight: 700;
      transition: all,.4s,ease-out;
      &:hover{
        background-color: var(--red-brand-60);
      }
    }
  }
  @media ${device.laptop}{
    flex-direction: row;
    min-height: 700px;
    > div:first-child{
      max-width: 700px; 
      > .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
      }
    }
    > div:last-child {
      margin-left: 4rem;
      text-align: left;
      margin-bottom: 0;
      h1 {
        font-size: 7.2rem;
        padding-top: 0;
      }
      p{
        margin-top: -.375em;
        margin-bottom: 1.25em;
      }
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" />
    <PageWrapper>
      <div>
        <Image />
      </div>
      <div>
        <h1>404</h1>
        <p>Oops! Algo no salio bien. La manada esta en el caso!</p>
        <Link to="/">Vuelve al inicio</Link>
      </div>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
