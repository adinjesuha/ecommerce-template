import styled from 'styled-components'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 

import { device } from '../../utils/breakpoints'

export const StyledHeroSlider = styled(Slider)`
	.slick-slide{
		padding-bottom: 1px;
	}
	.slick-prev, .slick-next  {
		display: none !important;
		background-image: url(${require('../../images/arrow-right-white.svg')});
		background-position: 9px;
		background-repeat: no-repeat;
		background-size: 40px;
		width: 40px;
		height: 40px;
		outline: 0;
		opacity: 0.7;
		transition: opacity .3s ease;
		&::before{
			content: "";
		}
		&:hover{
			opacity: 1;
			outline: none;
			background-image: url(${require('../../images/arrow-right-white.svg')});
			background-position: 9px;
			background-repeat: no-repeat;
		}
	}
	.slick-prev{
		z-index: 1;
		transform: rotate(180deg);
	}
	.slick-dots{
		bottom: -15px;
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
      &.slick-active button:before{
				opacity: 1;
        background-color: var(--red-brand);
        color: transparent;
      }
    }
  }
	.hero-image{
		width: 100%;
		&__figure{
			margin: 0;
		}
		&__image{
			display: block;
			margin: auto;
			object-fit: cover;
			max-width: 100%;
		}
	}
	@media ${device.tablet}{
		.slick-prev, .slick-next  {
			display: block !important;
		}
		.slick-prev{
			left: 16px;
			top: calc(50% - 20px);
		}
		.slick-next{
			right: 16px;
		}
		.hero-image{
			&__image{
				height: 300px;
			}
		}
	}
	@media ${device.laptop}{
		.slick-prev{
			left: 48px;
		}
		.slick-next{
			right: 48px;
		}
	}
`

export const StyledSliderItem = styled.div`
	width: 100%;
	> a div{
		height: 300px;
		width: 100%;
		> img{
			width: 100%;
		}
	}
`