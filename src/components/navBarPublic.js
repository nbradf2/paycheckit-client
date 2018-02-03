import React from 'react';
import '../normalize.css';
import '../index.css';
import './navBarPublic.css';

export default function NavBarPublic(props) {
	const links = props.links.map((link, index) =>(
		<li key={index}>
			<a href={link.href}>
				{link.text}
			</a>
		</li>
	));
	return (
		<div>
			<h1>{props.title}</h1>
			<nav>
				<ul>
					{links}
				</ul>
			</nav>
		</div>
	);
}