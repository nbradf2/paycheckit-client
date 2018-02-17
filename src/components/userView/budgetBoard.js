import React from 'react';
import BudgetCard from './budgetCard';
import './budgetBoard.css';

export default function BudgetBoard(props) {
	return(
		<div>
			<h1>Budget Board</h1>
			<BudgetCard />
		</div>
	)
}