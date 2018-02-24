import React from 'react';
import BudgetCard from './budgetCard';
import BudgetDetails from './budgetDetails';
import './budgetBoard.css';

export default function BudgetBoard(props) {
	return (
		// Will mapStateto Props the summaries take a card for each one
		// want a clone of what budget details does to pull in state and iterate over objects
		// to show a card/summary
		<div className="budgetBoard">
			<h2>My Budgets</h2>
			<ul>
				<BudgetCard />
				<BudgetDetails />
			</ul>
		</div>
	);
}
