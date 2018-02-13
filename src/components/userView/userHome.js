import React from 'react';
import NavBarUser from './navBarUser';
import BudgetBoard from './budgetBoard';
import BudgetFullView from './budgetFullView';
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
			<h2>My Budgets</h2>
			<BudgetBoard />
			<BudgetFullView />
		</div>
	);
}