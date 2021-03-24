import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import '../style.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
