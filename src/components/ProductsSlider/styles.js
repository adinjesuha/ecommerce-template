import styled from 'styled-components'
import Slider from 'react-slick'

export const ProductsSliderWrapper = styled.div`
  > h3 {
    font-weight: 300;
    line-height: 44px;
    margin-top: 0;
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
    background-position: 9px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #F04359;
    margin-right: 4px;
    margin-left: 4px;
    width: 40px;
    height: 40px;
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
      outline: none;
    }
  }
  .slick-prev{
    transform: rotate(180deg) translate(50px, 62px);
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
    }
  }
`