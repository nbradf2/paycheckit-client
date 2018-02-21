import React from 'react';
import {connect} from 'react-redux';
import BudgetCard from './budgetCard';
import './budgetBoard.css';

export default function BudgetBoard(props) {
	return (
		<div className="budgetBoard">
			<h2>My Budgets</h2>
			<ul>
				<BudgetCard />
			</ul>
		</div>
	);
}
