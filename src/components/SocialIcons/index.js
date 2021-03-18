import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SocialIconsWrapper, IconWrapper } from './style';


const SocialIcon = ({ url, mail }) => {
  return (
    <SocialIconsWrapper>
      <IconWrapper href={url[0]}>
        <FaFacebookF />
      </IconWrapper>
      <IconWrapper href={url[1]}>
        <FaInstagram />
      </IconWrapper>
      <IconWrapper href={`mailto:${mail}`}>
        <FaEnvelope />
      </IconWrapper>
    </SocialIconsWrapper>
  )
};

export default SocialIcon;