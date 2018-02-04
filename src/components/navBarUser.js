import React from 'react';
import './navBarUser.css';

export default function NavBarUser(props) {
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