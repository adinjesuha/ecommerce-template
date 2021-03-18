import React from 'react'
import { Link } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
// Styles
import { StyledHeroSlider, StyledSliderItem } from './styles'

const HeroSlider = ({collections}) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true
				}
			}
		]
	};

	return (
		<StyledHeroSlider {...settings}>
			{collections.map(collection => (
				<StyledSliderItem key={collection.shopifyId}>
					<Link to={`/${collection.handle}`}>
						<div>
							<Image fluid={collection.image?.localFile.childImageSharp.fluid}/>
						</div>
					</Link>
				</StyledSliderItem>
			))}
		</StyledHeroSlider>
	)
}

export default HeroSlider
