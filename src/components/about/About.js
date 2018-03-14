import React, { Component } from 'react';

import profilePic from './me.jpg';
import './About.css';

import {
	Container,
	Row
} from 'reactstrap';

class About extends Component {
	render() {
		return (
			<Container>
				<Row>
					<center>
						<img className="img-profile" src={profilePic} />
						<br />
						<br />
						<h1>Grant Perdue</h1>
					</center>
				</Row>
				<Row>
					<p>
						Lorem ipsum dolor amet subway tile umami poke art party, wolf retro whatever activated charcoal gochujang. Selfies tilde gastropub flexitarian ennui church-key artisan. Locavore butcher kale chips chicharrones fanny pack. Bitters helvetica celiac, biodiesel wayfarers deep v kogi.
					</p>
					<p>
						Photo booth yuccie lomo, meggings art party jean shorts put a bird on it four dollar toast cornhole. Seitan austin keffiyeh synth, trust fund banh mi plaid chillwave tousled art party franzen. Swag squid art party hell of fam. Stumptown kitsch 90's, beard master cleanse ramps thundercats wayfarers green juice.
					</p>
					<p>
						Selfies fam thundercats yr selvage retro. Franzen enamel pin ramps literally quinoa slow-carb. Copper mug subway tile 8-bit, meditation umami next level tacos. Hexagon lumbersexual kitsch semiotics, whatever sustainable selvage. Tote bag try-hard edison bulb normcore schlitz.
					</p>
				</Row>
			</Container>
		);
	}
}

export default About;