import React from 'react';
import './navBarPublic.css';

export default function NavBarPublic(props) {
	const links = props.links.map((link, index) =>(
		<li key={index} className="nav-links">
			<a href={link.href}>
				{link.text}
			</a>
		</li>
	));
	return (
		<div className="nav-bar-public row">
			<h1 className="col-6" id="title">{props.title}</h1>
			<nav className="nav-public col-6">
				<div id="menuToggle">
					<input type="checkbox" />
					<span></span>
					<span></span>
					<span></span>
					<ul id="menu">{links}</ul>
				</div>
			</nav>
		</div>
	);
}