import React, { useState } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { MdMenu } from 'react-icons/md'

import { HeaderWrapper, Nav } from './styles'
import { Button } from '../globals';
import { StyledLink } from "../StyledLink"
import Cart from '../Cart/index'
import Search from '../Search'
import MenuLinks from './MenuLinks';

const Header = () => {
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

  const data = useStaticQuery(graphql`
    query SiteMetaDataQuery {
      site {
        siteMetadata {
          gatsbyStorefrontConfig{
            storeName
            logoUrl
            menu{
              name
              link
              subMenu{
                name
                links{
                  name
                  link
                }
              }
            }
          }
        }
      }
      menForSan: file(name: {eq: "men-for-san"}) {
        childImageSharp {
          fluid(maxHeight: 758, quality: 100){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { storeName, logoUrl, menu } = data.site.siteMetadata.gatsbyStorefrontConfig

  
  return (
    <HeaderWrapper show={hideNavbarOnScroll}>
      <Nav>
        <Button 
          isHamburger 
          name="hamburger-button"
        >
          <MdMenu />
        </Button>
        <StyledLink to="/">
          {logoUrl ? (
            <img
              src={logoUrl}
              width={100}
              height='auto'
              alt={storeName} 
            />
          ) : (
            {storeName}
          )}
        </StyledLink>
        <MenuLinks 
          menuLinks={menu}
          menForSan={data.menForSan.childImageSharp}
        />
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
