import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

import './Navbar.css';

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md" fixed="sticky">
					<NavbarBrand href="/">MaoXianTime</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem className='NavItem'>
								<NavLink onClick={this.props.navAbout}>Grant Perdue</NavLink>
							</NavItem>
							<NavItem className='NavItem'>
								<NavLink onClick={this.props.navPortfolio}>Portfolio</NavLink>
							</NavItem>
							<NavItem className='NavItem'>
								<NavLink onClick={this.props.navResume}>Resume</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}