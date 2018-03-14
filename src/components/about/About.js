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
			<Container >
				<Row className="justify-content-center">
					<img className="img-profile" src={profilePic} />
				</Row>
			</Container>
		);
	}
}

export default About;