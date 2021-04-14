import styled from 'styled-components'
import Slider from 'react-slick'
import { device } from '../../utils/breakpoints'

export const ProductsSliderWrapper = styled.div`
  > h3 {
    font-weight: 300;
    line-height: 1.2;
    margin-top: 0;
    width: 200px;
  }
  @media ${device.mobileL}{
    > h3{
     width: 250px;
    }
  }
  @media ${device.tablet}{
    > h3 {
      width: 100%;
    }
  }
`

export const SliderWrapper = styled(Slider)`
  .slick-list{
    margin-left: -.5rem;
    margin-right: -.6rem;
  }
  .slick-slide{
    padding-bottom: 1px;
  }
  .slick-prev, .slick-next  {
    background-image: url(${require('../../images/arrow-right-brand.svg')});
    background-position: 8px;
    background-size: 18px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #F04359;
    margin-right: 4px;
    margin-left: 4px;
    width: 35px;
    height: 35px;
    outline: 0;
    transition: background-color .3s ease;
    /* positioning */
    transform: translate(0, -62px);
    top: 0;
    right: 0;
    left: unset;
    &::before{
      display: none;
    }
    &:hover{
      background-image: url(${require('../../images/arrow-right-white.svg')});
      background-color: #F04359;
      background-position: 9px;
      background-repeat: no-repeat;
      background-size: 20px;
      outline: none;
    }
  }
  .slick-prev{
    transform: rotate(180deg) translate(42px, 62px);
  }
  .slick-dots{
    display: none;
  }
  .slick-disabled{
    transition: background-color .3s ease;
    background-image: url(${require('../../images/arrow-right.svg')});
    border-color: #ddd;
    cursor: default;
    &:hover{
      background-image: url(${require('../../images/arrow-right.svg')});
      background-color: transparent !important;
      background-position: 9px;
      background-repeat: no-repeat;
      background-size: 20px;
    }
  }
  @media ${device.mobileL}{
    .slick-prev, .slick-next  {
      background-position: 9px;
      background-size: 20px;
      width: 40px;
      height: 40px;
    }
    .slick-prev{
      transform: rotate(180deg) translate(50px, 62px);
    }
  }
`