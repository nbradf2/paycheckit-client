import React from 'react';
import ReactTable from 'react';
import './budgetList.css';

export default function BudgetList(props) {
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
		let date = line.date;
		let amount = line.amount;
		let label = line.label;

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
			<h3>January 2018</h3>
			<div>{rows}</div>
		</div>
	);
}