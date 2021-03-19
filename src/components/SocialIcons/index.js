import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SocialIconsWrapper, IconWrapper } from './style';


const SocialIcon = ({ url, mail }) => {
  return (
    <SocialIconsWrapper>
      <IconWrapper 
        href={url[0]}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </IconWrapper>
      <IconWrapper 
        href={url[1]}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </IconWrapper>
      <IconWrapper 
        href={`mailto:${mail}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </IconWrapper>
    </SocialIconsWrapper>
  )
};

export default SocialIcon;