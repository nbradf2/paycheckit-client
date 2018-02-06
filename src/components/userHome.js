import React from 'react';
import NavBarUser from './navBarUser';
import './userHome.css';

export default function UserHome(props) {
	const links = [{
		text: 'My Budget',
		href: '#myBudget'
	}, {
		text: 'Add Budget',
		href: '#addBudget'
	}]
	return (
		<div>
			<NavBarUser title="PaycheckIt" links={links}/>
			<h1>Hello</h1>
		</div>
	);
}