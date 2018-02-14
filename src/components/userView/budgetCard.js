import React from 'react';
import {connect} from 'react-redux'
import './budgetCard.css';

export default function BudgetCard(props) {
	return (
		<div>
			{props.checked}
			{props.date}
			{props.amount}
			{props.label}
		</div>
	)
	
}

BudgetCard.defaultProps = {
	checked: '',
	date: '',
	amount: '',
	label: ''
}