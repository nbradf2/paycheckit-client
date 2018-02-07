import React from 'react';
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
		return (
			<tr>
				<td>{line.date}</td>
				<td>{line.amount}</td>
				<td>{line.label}</td>
			</tr>
		)
	})

	return(
		<div className="budgetTable">
			<table>
				<th>02/02/18 - 02/15/18</th>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}