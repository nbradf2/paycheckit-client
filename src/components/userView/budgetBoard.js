import React from 'react';
import BudgetList from './budgetList';
import AddCardForm from './addCardForm';
import './budgetBoard.css';

export default function BudgetBoard(props) {
	return(
		<div id="budgetBoard">
			<BudgetList />
			<AddCardForm />
		</div>
	);
}