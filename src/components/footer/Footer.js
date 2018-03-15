import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className='bg-light'>
				<Container>
					<Row className='justify-content-md-center'>
						<Col md='4'>
							<p className="lead">Contact</p>
							<hr />
							<p>grantmperdue@gmail.com</p>
							<p>Provo, UT</p>
						</Col>
						<Col md='4'>
							<p className='lead'>Links</p>
							<hr />
							<p>linkedin</p>
							<p>github</p>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;