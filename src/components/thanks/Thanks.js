import React from 'react';

import { Link } from 'react-router-dom';

const Thanks = () => {
	return (
		<div className='Thanks'>
			<center>
				<h2>Thank you for your message!</h2>
				<p>You can return to the homepage <Link to={'/'}>here</Link>.</p>
			</center>
		</div>
	)
};

export default Thanks;