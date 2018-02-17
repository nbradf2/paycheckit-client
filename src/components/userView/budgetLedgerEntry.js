import React from 'react';
import './budgetLedgerEntry.css';

export default function BudgetLedgerEntry(props) {
	return (
		<div className="line">
			<p><span><input type="radio" /></span>{props.month}/{props.day}/{props.year}</p>
			<p>{props.amount}</p>
			<p>{props.label}</p>
			<p><i className="fa fa-pencil"></i></p>
			<p><i className="fa fa-trash"></i></p>
		</div>
	)
}

BudgetLedgerEntry.defaultProps = {
	month: 2,
	day: 25,
	year: 2018,
	amount: 75,
	label: 'Visa',
}