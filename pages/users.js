import React from 'react';
import axios from 'axios';

const User = () => (
	<div>
		<ul>
			<li>Lorena</li>
		</ul>
	</div>
);

User.getInitialProps = async () => {
	const response = await axios.get(
	)
}

export default User;