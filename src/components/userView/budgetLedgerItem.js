import React from 'react';
import {connect} from 'react-redux'
import './budgetLedgerItem.css';

export default function BudgetLedgerItem(props) {
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

BudgetLedgerItem.defaultProps = {
	month: '',
	startingBalance: '',
	income: '',
	expenses: '',
	endingBalance: ''
}