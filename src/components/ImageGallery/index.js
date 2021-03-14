import React, { useEffect, useState } from 'react'
import Image from 'gatsby-image'
import Slider from 'react-slick'
import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

import { ImageGalleryWrapper } from './styles'
import ImageThumbnail from './ImageThumbnail'

export const StyledSliderThumbnail = styled(Slider)`
  .slick-arrow{
    display: none !important; 
  }
  .slick-dots{
    li{
      width: 10px;
      height: 10px;
      margin: 0 8px;
      button {
        width: 10px;
        height: 10px;
        &:before{
          color: transparent;
          border-radius: 50%;
          display: inline-block;
          width: 10px;
          height: 10px;
          margin: 0 1px;
          padding: 0;
          overflow: visible;
          background-color: #fff;
          border: 1px solid var(--red-brand);
        }
      }
    }
    .slick-active > button:before{
      background-color: var(--red-brand);
    }
  }
  @media ${device.mobile}{
    width: 300px;
    margin: 0 auto;
  }
  @media ${device.tablet}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 80%;
  }
`

export const SliderThumbnail = ({images, handleClick, activeImageThumbnail}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
  }
  if(!images.length > 1) return null
  return(
    <StyledSliderThumbnail {...settings}>
    {images.map(image => (
      <ImageThumbnail 
        key={image.id}
        image={image}
        isActive={activeImageThumbnail.id === image.id}
        onClick={handleClick} 
      />
    ))}
    </StyledSliderThumbnail>
  )
}

export default function ImageGallery({images, selectedVariantImageId}){
  const [ activeImageThumbnail, setActiveImageThumbnail ] = useState(
    images.find(({id}) => id === selectedVariantImageId) || images[0]
  )
  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({id}) => id === selectedVariantImageId) || images[0]
    )
  }, [selectedVariantImageId, images, setActiveImageThumbnail])
  const handleClick = image => {
    setActiveImageThumbnail(image)
  }
  return (
    <ImageGalleryWrapper>
      <div className="selected-image">
        <Image 
          fluid={activeImageThumbnail.localFile.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
        />
      </div>
      <SliderThumbnail 
        images={images} 
        handleClick={handleClick}
        activeImageThumbnail={activeImageThumbnail} 
      />
    </ImageGalleryWrapper>
  )
}

