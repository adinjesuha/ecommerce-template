import React from "react"
import PropTypes from "prop-types"

import { HeaderWrapper } from './styles'
import Cart from '../Cart/index'
import { StyledLink } from "../StyledLink"
import Search from '../Search'

const Header = ({ siteTitle }) => {
  return (
    <>
      <HeaderWrapper>
        <StyledLink to="/">{siteTitle}</StyledLink>
        <StyledLink to="/all-products">All Products</StyledLink>
        <Search />
        <Cart />
      </HeaderWrapper>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
