import React from 'react';
import './budgetCard.css';

export default function BudgetCard(props) {
	let date = 'January 2018';
	let startingBalance = 1000;
	let budget = [
		{
			checked: false,
			date: '02/02/18',
			amount: 1000,
			label: 'Paycheck'
		},
		{
			checked: false,
			date: '02/10/18',
			amount: 400,
			label: 'Savings'
		},
		{
			checked: false,
			date: '02/10/18',
			amount: -75,
			label: 'MasterCard'
		},
		{
			checked: false,
			date: '02/02/18',
			amount: -105,
			label: 'Verizon'
		},
	];

	let incomeBalance = startingBalance + budget.amount;

	let rows = budget.map(function(line, index) {
		return (
			<div className="line">
				<input type="checkbox" id="checkbox"/>
				<label for="checkbox" hidden></label>
				<p className="item">{line.date}</p>
				<p className="item">{line.amount}</p>
				<p className="item">{line.label}</p>
			</div>
		)
	});

	return(
		// will pull from the current list - mapStateToProps(array of budgets)
		// will iterate over an array of BudgetCards
		// get data group by month through mongo
		<div className="budgetTable col-4">
			{/*starting balance*/}
			{/*income balance*/}
			{/*ending balance*/}
			<h3>{date}</h3>
			<h3>{startingBalance}</h3>
			<div>{rows}</div>
			<div>{incomeBalance}</div>
			<button id="addNewBudget">Add New Budget</button>
			{/*Show detail button on top right of card*/}
		</div>
	);
}