import React, { useState } from 'react'
import PropTypes from "prop-types"
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { HeaderWrapper, Nav } from './styles'
import Cart from '../Cart/index'
import { StyledLink } from "../StyledLink"
import Search from '../Search'

const Header = ({ metaData }) => {
  const [hideNavbarOnScroll, setHideNavbarOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      // Note: prevPos.y > -12 is here to fix Nav component disappearing bug
      // due to elastic scrolling/bounce effect in mobile Safari.
      const isShow = currPos.y > prevPos.y || prevPos.y > -66;
      if (isShow !== hideNavbarOnScroll) setHideNavbarOnScroll(isShow);
    },
    [hideNavbarOnScroll],
    null,
    false,
    100
  );

  const { storeName, logoUrl } = metaData;
  
  return (
    <HeaderWrapper show={hideNavbarOnScroll}>
      <Nav>
        <StyledLink to="/">
          {logoUrl ? (
            <img
              src={logoUrl}
              width="100"
              height="auto"
              alt={storeName}
              style={{
                verticalAlign: 'middle'
              }}  
            />
          ) : (
            {storeName}
          )}
        </StyledLink>
        <StyledLink to="/all-products">All Products</StyledLink>
        <Search />
        <Cart />
      </Nav>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
