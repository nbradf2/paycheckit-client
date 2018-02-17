import React from 'react';
import BudgetCard from './budgetCard';
import AddBudgetCard from './addBudgetCard';
import './budgetBoard.css';

export default function BudgetBoard(props) {
	return(
		<div>
			<h1>Budget Board</h1>
			<BudgetCard />
			<AddBudgetCard />
		</div>
	)
}