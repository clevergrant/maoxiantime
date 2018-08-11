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

import { Link } from 'react-router-dom';

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
			<div className='Navbar-custom'>
				<Navbar color="dark" dark expand="md" fixed="sticky">
					<NavbarBrand href="/">Grant Perdue</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem className='NavItem'>
								<Link to={'/'}>
									<NavLink>About Me</NavLink>
								</Link>
							</NavItem>
							<NavItem className='NavItem'>
								<Link to={'/Portfolio'}>
									<NavLink>Portfolio</NavLink>
								</Link>
							</NavItem>
							<NavItem className='NavItem'>
								<Link to={'/Resume'}>
									<NavLink>Resume</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}