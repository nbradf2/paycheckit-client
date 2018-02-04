import React from 'react';
import NavBarUser from './navBarUser'
import BudgetTemplateList from './budgetTemplateList';
import './budgetBoard.css';

export default function BudgetBoard(props) {
	const links = [{
		text: 'My Budget',
		href: '#myBudget'
	}, {
		text: 'Add Budget',
		href: '#addBudget'
	}]

	return(
		<div>
			<NavBarUser title="PaycheckIt" links={links}/>
			<BudgetTemplateList />
		</div>
	);
}