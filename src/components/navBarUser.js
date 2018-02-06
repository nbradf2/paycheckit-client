import React from 'react';
import './navBarUser.css';

export default function NavBarUser(props) {
	const links = props.links.map((link, index) =>(
		<li key={index} className="nav-links nav-item">
			<a href={link.href}>
				{link.text}
			</a>
		</li>
	));
	return (
		<div className="row nav-bar-users">
			<h1 className="col-6">{props.title}</h1>
			<nav className="col-6 nav-users">
				<ul>
					{links}
				</ul>
			</nav>
		</div>
	);
}