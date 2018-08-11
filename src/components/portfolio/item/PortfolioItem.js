import React, { Component } from 'react';

import {
	Row,
	Col
} from 'reactstrap';

import './PortfolioItem.css';

class PortfolioItem extends Component {
	render() {
		return (
			<Row className="PortfolioItem">
				<Col sm="4">
					<img className="img-thumbnail" src={this.props.file} alt='Grant Perdue' />
				</Col>
				<Col sm="8">
					<h2>{this.props.name}</h2>
					<hr />
					<h4>TECH: {this.props.tech}</h4>
					<p>{this.props.children}</p>
				</Col>
			</Row>
		);
	}
}

export default PortfolioItem;