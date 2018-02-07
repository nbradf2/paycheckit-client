import React from 'react';
import './budgetTemplateList.css';

export default function BudgetTemplateList(props) {
	return(
		<div>
			<table>
				<th>02/02/18 - 02/15/18</th>
				<tr className="startingBalance">
					<td className="dateApplied"></td>
					<td>$1,000.00</td>
					<td>Starting Balance</td>
				</tr>
				<tr>
					<td className="dateApplied">02/02/18</td>
					<td className="credit">$955.76</td>
					<td>Paycheck</td>
				</tr>
				<tr>
					<td className="dateApplied">02/05/18</td>
					<td className="credit">$400.00</td>
					<td>Savings</td>
				</tr>
				<tr className="initialBalance">
					<td className="dateApplied"></td>
					<td>$2,355.76</td>
					<td>Starting Balance</td>
				</tr>
				<tr>
					<td className="dateApplied">02/05/18</td>
					<td className="debit">$75.00</td>
					<td>MasterCard</td>
				</tr>
				<tr>
					<td className="dateApplied">02/10/18</td>
					<td className="debit">$250.00</td>
					<td>Sallie Mae</td>
				</tr>
				<tr>
					<td className="dateApplied">02/12/18</td>
					<td className="debitUtility">$100.00</td>
					<td>ComEd</td>
				</tr>
				<tr>
					<td className="dateApplied">02/15/18</td>
					<td className="debitUtility">$105.00</td>
					<td>Verizon</td>
				</tr>
				<tr className="moneySpent">
					<td className="dateApplied"></td>
					<td>$530.00</td>
					<td>Money Spent</td>
				</tr>
				<tr className="initialBalance">
					<td className="dateApplied">02/01/18</td>
					<td>$1,825.76</td>
					<td>Ending Balance</td>
				</tr>
			</table>
		</div>
	);
}