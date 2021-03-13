import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
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
        overflowX: 'hidden',
      }}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
