import React from 'react';
import {connect} from 'react-redux'
import './budgetCard.css';

export default function BudgetCard(props) {
	return (
		<div>
			{props.month}
			{props.startingBalance}
			{props.income}
			{props.expenses}
			{props.endingBalance}
		</div>
	)
}

BudgetCard.defaultProps = {
	month: '',
	startingBalance: '',
	income: '',
	expenses: '',
	endingBalance: ''
}