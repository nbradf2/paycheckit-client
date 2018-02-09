import React from 'react';
import './budgetList.css';

export default function BudgetList(props) {
	let date = 'January 2018';

	let budget = [
		{
			date: '02/02/18',
			amount: 1000,
			label: 'Paycheck'
		},
		{
			date: '02/10/18',
			amount: 400,
			label: 'Savings'
		},
		{
			date: '02/10/18',
			amount: -75,
			label: 'MasterCard'
		},
		{
			date: '02/02/18',
			amount: -105,
			label: 'Verizon'
		},
	];

	let rows = budget.map(function(line, index) {
		return (
			<div className="line">
				<p className="item">{line.date}</p>
				<p className="item">{line.amount}</p>
				<p className="item">{line.label}</p>
			</div>
		)
	});

	return(
		<div className="budgetTable col-4">
			<h3>{date}</h3>
			<div>{rows}</div>
		</div>
	);
}