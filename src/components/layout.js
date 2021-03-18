import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import '../style.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          gatsbyStorefrontConfig{
            storeName
            logoUrl
          }
        }
      }
    }
  `)
  return (
    <>
      <Header metaData={data.site.siteMetadata.gatsbyStorefrontConfig} />
      <main style={{
        paddingTop: '66px',
      }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
