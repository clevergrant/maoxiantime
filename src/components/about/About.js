import React, { Component } from 'react';

import './About.css';

import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Input,
	Label,
	Button
} from 'reactstrap';

class About extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.history.push('/thanks');
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<center>
							<h1 className='display-4'>About Me</h1>
						</center>
						<p>I grew up in sunny Southern California, and I love the ocean. Sailing is one of my favorite things to do, besides building websites. I've been developing since 2014, JavaScript being my first language. I've done tons of school projects using C++, including creating my own binary search trees, and all sorts of other types of data storage.</p>
						<p>My first job developing was at Brigham Young University, where we had been using Microsoft SharePoint to develop our outward-facing sites. After updating the servers and moving them off-site, we realized that we could no longer rely on SharePoint, having lost control of the backend. So, we made a list of all of the best features that we and our clients liked, and we set off creating our own CMS, which we called SCE (Simple Content Editor).</p>
						<p>On my own time, I also enjoy playing video games. I love some classics like Fire Emblem on the GameBoy Advance. When I'm bored of the normal gameplay, I like hacking into the game to upgrade my characters to rediculous levels. One day, I was hacking the game and decided that I'd like a tool to make the hacking that much easier for me. Little did I know, I'd be scrolling through the emulators' codebase learning how they wrote the cheat system, attempting to re-create it in JavaScript. After a couple days of intense research and coding, I completed my website, <a href="http://fireemblem.maoxiantime.com">FireEmblem Cheats</a>.</p>
						<p>I'm LDS, so I love Jesus, and I love dogs.</p>
						<br/><br/>
						<center>
							<h2>Request a free consultation, or just say hi!</h2>
						</center>
						<Form name='contact' method='POST' netlify onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for='name'>Name</Label>
								<Input type='text' id='name' name='name' placeholder='Your Name' />
							</FormGroup>
							<FormGroup>
								<Label for='email'>Email</Label>
								<Input type='email' id='email' name='email' placeholder='your@email.here' />
							</FormGroup>
							<FormGroup>
								<Label for='message'>Message</Label>
								<Input type='textarea' id='message' name='message' />
							</FormGroup>
							<FormGroup>
								<Button color='info'>Send</Button>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default About;