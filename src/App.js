import React, { Component } from 'react';

import {
	Switch,
	Route
} from 'react-router-dom';

import Content from './components/Content';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Thanks from './components/thanks/Thanks';
import NotFound from './components/NotFound';

import Footer from './components/footer/Footer';

import './App.css';

class App extends Component {

	render() {
		return (
			<div className='App'>

				<Navbar />

				<Content>

					<div className='hero-pic' />
					<div className='profile-pic' />

					<Switch>
						<Route exact path='/' component={About} />
						<Route path='/Portfolio' component={Portfolio} />
						<Route path='/Resume' component={Resume} />
						<Route path='/Thanks' component={Thanks}/>
						<Route component={NotFound} />
					</Switch>

				</Content>

				<Footer />

			</div>
		)
	}
}

export default App;