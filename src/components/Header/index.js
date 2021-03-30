import React, { useState } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { HeaderWrapper, Nav } from './styles'
import { Button } from '../globals'
import { StyledLink } from "../StyledLink"
import Logo from '../Logo'
import Cart from '../Cart/index'
import Search from '../Search'
import MenuLinks from './MenuLinks'
import MobileNav from './MobileNav'

const Header = () => {
  const [ openMenu, setOpenMenu ] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteMetaDataQuery {
      site {
        siteMetadata {
          gatsbyStorefrontConfig{ 
            storeName
            logoUrl
            company
            socialNetworks
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

  const { 
    storeName, 
    logoUrl, 
    menu ,
    company,
    socialNetworks
  } = data.site.siteMetadata.gatsbyStorefrontConfig

  return (
    <HeaderWrapper>
      <Nav>
        <Button 
          isHamburger 
          name="hamburger-button"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M10.586 12L4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 1 1-1.414-1.414L10.586 12z"></path></g></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M3 13a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H3zm0-6a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2H3zm0 12a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H3z"></path></g></svg>
          )}
        </Button>
        <StyledLink to="/">{logoUrl ? <Logo /> : {storeName} }</StyledLink>
        <MenuLinks
          menuLinks={menu}
          menForSan={data.menForSan.childImageSharp}
        />
        <Search />
        <Cart />
        {openMenu && (
          <MobileNav 
            menuLinks={menu}
            openMenu={openMenu}
            company={company}
            socialNetworks={socialNetworks}
          />
        )}
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
