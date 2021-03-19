import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SocialIconsWrapper, IconWrapper } from './style';


const SocialIcon = ({ url, mail, phone }) => {
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
      <IconWrapper 
        href={`tel:${phone}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaPhone />
      </IconWrapper>
    </SocialIconsWrapper>
  )
};

export default SocialIcon;