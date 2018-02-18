import React from 'react';
import NavBarUser from './navBarUser';
import BudgetBoard from './budgetBoard';
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
		<div className="userHome">
			<NavBarUser title="PaycheckIt" links={links}/>
			<BudgetBoard />
		</div>
	);
}