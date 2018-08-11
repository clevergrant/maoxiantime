import React, { Component } from 'react';

import { Document, Page } from 'react-pdf';

import pdf from './Grant Perdue Fall 2017 Resume.pdf';

import './Resume.css';

class Resume extends Component {

	state = {
		numPages: null,
		pageNumber: 1,
	}

	onDocumentLoad = ({ numPages }) => {
		this.setState({ numPages });
	}

	render() {
		const { pageNumber } = this.state;

		return (
			<div className="d-flex justify-content-center">
				<Document className="Document"
					file={pdf}
					onLoadSuccess={this.onDocumentLoad}>
					<Page pageNumber={pageNumber} />
				</Document>
			</div>
		);
	}
}

export default Resume;