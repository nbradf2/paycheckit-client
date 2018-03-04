import React from 'react';
import './budgetSummary.css';

export default function BudgetSummary(props) {
	

	return (
		<div >
			<h2>{props.month} {props.year}</h2>
			<div>
				<h3>Starting Balance: {props.startingBalance}</h3>
			</div>
			<div>
				<h3>Income: {props.income}</h3>
			</div>
			<div>
				<h3>Expenses: {props.expenses}</h3>
			</div>
			<div>
				<h3>Ending Balance: {props.endingBalance}</h3>
			</div>
		</div>
	)
}

BudgetSummary.defaultProps = {
	month: 2,
	year: 25,
	startingBalance: 2018,
	income: 75,
	expenses: 'Visa',
	endingBalance: 'income',
}