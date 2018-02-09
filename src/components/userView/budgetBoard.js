import React from 'react';
import BudgetList from './budgetList';
import './budgetBoard.css';

export default function BudgetBoard(props) {
	return(
		<div id="budgetBoard">
			<BudgetList />
		</div>
	);
}