import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import { FooterWrapper, FooterBlocks } from './styles'
import { LayoutWrapper } from '../globals'
import Newsletter from '../Newsletter'
import SocialIcons from '../SocialIcons'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query FooterQuery {
    site {
      siteMetadata {
        gatsbyStorefrontConfig {
          email
          company
          about
          phone
          socialNetworks
          footerLinks {
            name
            link
          }
        }
      }
    }
  }
`);
  const year = new Date().getFullYear();
  const {
    email,
    company,
    about,
    phone,
    socialNetworks,
    footerLinks,
  } = data.site.siteMetadata.gatsbyStorefrontConfig;
  return (
    <FooterWrapper>
      <LayoutWrapper>
        <FooterBlocks>
          <div className="footer-item">
            <h3>Enlaces Adicionales</h3>
            <div>
              <ul>
              {footerLinks?.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <h3>Quienes somos?</h3>
            <p>{about}</p>
          </div>
          <div className="footer-item">
            <h3>Síguenos</h3>
            <div>
              <SocialIcons url={socialNetworks} mail={email}/>
            </div>
          </div>
          <div className="footer-item">
            <h3>Suscríbete</h3>
            <p>Mantente enterado de nuestras promos y nuevos productos.</p>
            <div>
              <Newsletter />
            </div>
          </div>
        </FooterBlocks>
        <p className="site-footer-credits">{`Todos los derechos reservados © ${year} ${company}.`}</p>
      </LayoutWrapper>
    </FooterWrapper>
  )
}

export default Footer;