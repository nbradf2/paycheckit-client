import React from 'react';
import {connect} from 'react-redux';
import './budgetLedgerEntry.css';

export default function BudgetLedgerEntry(props) {
	return (
		<div className="line">
			<p><span><input type="checkbox" /></span>{props.month}/{props.day}/{props.year}</p>
			<p>{props.amount}</p>
			<p>{props.label}</p>
			<p><a href="#addLedgerEntry"><i className="fa fa-pencil"></i></a></p>
			<p><i className="fa fa-trash"></i></p>
		</div>
	)
}

BudgetLedgerEntry.defaultProps = {
	id: '',
	month: 2,
	day: 25,
	year: 2018,
	amount: 75,
	label: 'MasterCard',
}


//connect to redux to dispatch the delete action        