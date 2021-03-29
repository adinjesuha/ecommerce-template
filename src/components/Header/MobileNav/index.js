import React, { useState } from 'react'
import { Link } from 'gatsby'
import SocialIcons from '../../SocialIcons'

import { MobileMenuWrapper, MenuItem, SubMenuItem, MobileSubMenuWrapper } from './styles'

const MobileSubMenuItem = ({links, name}) => {
  const [ openSubMenu, setOpenSubMenu ] = useState(false)
  return (
    <SubMenuItem>
      <button onClick={() => setOpenSubMenu(!openSubMenu)}>
        <div>{name}</div>
        <div>
          {openSubMenu ? (
            <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M12 10.317L5.65 15.76a1 1 0 1 1-1.3-1.518l7-6a1 1 0 0 1 1.3 0l7 6a1 1 0 1 1-1.3 1.518L12 10.317z"></path></g></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M12 13.683l6.35-5.442a1 1 0 0 1 1.3 1.518l-7 6a1 1 0 0 1-1.3 0l-7-6a1 1 0 1 1 1.3-1.518L12 13.683z"></path></g></svg>
          )}
        </div>
      </button>
      { openSubMenu && (
        <ul>
        {links.map(({name, link}, index) => (
          <li key={index}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
        </ul>
      )}
    </SubMenuItem>
  )
}


const MobileSubMenu = ({subMenuLinks, isOpen, setOpenMenu}) => (
  <MobileSubMenuWrapper isOpen={isOpen}>
    <button onClick={() => setOpenMenu(false)}>
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M9.317 12l5.442 6.35a1 1 0 1 1-1.518 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 0 1 1.518 1.3L9.317 12z"></path></g></svg>
      </div>
      <div>Volver</div>
    </button>
    <div>
      <ul>
        {subMenuLinks.map(({name, links}) => (
          <MobileSubMenuItem 
            key={name} 
            links={links}
            name={name}
          />
        ))}
      </ul>
    </div>
  </MobileSubMenuWrapper>
)

const MobileMenuItem = ({menuLink}) => {
  const [ openMenu, setOpenMenu ] = useState(false)
  const {
    name, 
    link,
    subMenu,
  } = menuLink
  return(
    <MenuItem>
    {subMenu && subMenu.length > 0 ? (
    <>
      <button onClick={() => setOpenMenu(!openMenu)}>
        <div>{name}</div>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M14.683 12L9.24 5.65a1 1 0 1 1 1.518-1.3l6 7a1 1 0 0 1 0 1.3l-6 7a1 1 0 1 1-1.518-1.3L14.683 12z"></path></g></svg>
        </div>
      </button>
      { openMenu && (
        <MobileSubMenu
          subMenuLinks={subMenu}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      )}
    </>
    ) : (
      <Link to={link}>
        <div>{name}</div>
      </Link>
    )}
    </MenuItem>
  )
}

const MobileNav = ({ menuLinks, company, socialNetworks }) => {
  const year = new Date().getFullYear();
  return (
    <MobileMenuWrapper>
      <div className="mobileNavigation-outer">
        <div>
          <ul>
            {menuLinks.map((menuLink, index) => (
              <MobileMenuItem key={index} menuLink={menuLink}/>
            ))}
          </ul>
        </div>
      </div>
      <div className="mobileNavigation-footer">
        <SocialIcons url={socialNetworks} />
        <div>
          <span>{`© ${year} ${company}`}</span>
        </div>
      </div>
    </MobileMenuWrapper>
  )
}

export default MobileNav