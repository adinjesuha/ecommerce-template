import React from 'react'
import Img from 'gatsby-image'
import { MenuLinksWrapper, SubMenu, SubMenuItem } from './styles'
import { StyledLink } from '../../StyledLink'

const MenuLinks = ({menuLinks, grainFree}) => {
  return (
    <MenuLinksWrapper>
      {menuLinks.map((link) => (
        <li key={link.name}>
          {link.link ? (
            <StyledLink
              to={link.link}
              aria-haspopup={link.subMenu && link.subMenu.length > 0 ? true : false}
              className="menu-container"
            >
              {link.name}
            </StyledLink>

          ) : (
            <span className="menu-container">{link.name}</span>
          )}
          {link.subMenu && link.subMenu.length > 0 ? (
            <SubMenu aria-label="submenu">
              <div className="subMenu-wrapper">
                <div className="subMenu-grid">
                  {link.subMenu.map(({name, links}, i) => name !== 'Destacado' ? (
                      <SubMenuItem key={i + 1}>
                        <div>{name}</div>
                        <ul>
                          {links.map(({name, link}) => (
                            <li key={name}>
                              <StyledLink to={link}>{name}</StyledLink>
                            </li>
                          ))}
                        </ul>
                      </SubMenuItem>
                  ) : (
                    <SubMenuItem featured>
                    {links.map(({name, link}) => (
                      <>
                        <div>
                          <StyledLink to={link}>
                            <Img fluid={grainFree.fluid}/>
                          </StyledLink>
                        </div>
                        <div>
                          <StyledLink key={name} to={link}>{name}</StyledLink>
                        </div>
                      </>
                    ))}
                    </SubMenuItem>
                  ))}
                </div>
              </div>
            </SubMenu>
          ) : null}
        </li>
      ))}
    </MenuLinksWrapper>
  )
}

export default MenuLinks