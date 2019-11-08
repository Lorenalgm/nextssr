import React from 'react';
import Link from 'next/link';

const Home = () => (
	<div>
		<h1>Hi</h1>
		<Link href="/users">
		<a>Usuários</a>
		</Link>
	</div>
);

export default Home;