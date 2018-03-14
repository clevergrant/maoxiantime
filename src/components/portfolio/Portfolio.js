import React, { Component } from 'react';

import PortfolioItem from './item/PortfolioItem';

import {
	Container
} from 'reactstrap';

import Image_sce from './sce.png';

class Portfolio extends Component {
	render() {
		return (
			<Container>

				<PortfolioItem name="SCE" file={Image_sce} tech="ASP.NET, MVC 5, EF 6, Bootstrap, jQuery">
					SCE (Simple Content Editor) was our attempt at re-creating the desirable pieces of Microsoft SharePoint in our own project because we felt that working with SharePoint the way we were was not helpful. We created our own CMS for our clients so that we could have greater control over our products. This system allows the client to build out and create their own website, much like Wordpress and similar applications, but it is owned and managed by BYU.
				</PortfolioItem>

			</Container>
		);
	}
}

export default Portfolio;