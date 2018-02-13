import React from 'react';
import './budgetFullView.css'

export default function BudgetFullView(props) {
	let card = [ 
	  {
	    date: '01/01/2018',
	    amount: 2000,
	    label: 'Wages'
	  },
	    {
	    date: '01/01/2018',
	    amount: -1000,
	    label: 'Rent'
	  },
	    {
	    date: '01/01/2018',
	    amount: -100,
	    label: 'Utilities'
	  }
	]

	let state = {
		currentBalance: 0,
		budgets: [
			{
				month: '01/2018',
			    income: 2000,
	      		expenses: 1100,
	      		startingBalance: 0,
	      		endingBalance: 900,
	      		lineItems: [
	      			{
	      				date: '01/01/2018',
				        amount: 2000,
				        label: 'wages'
	      			},
	      			{
	      				date: '01/01/2018',
	      				amount: -1000,
	      				label: 'rent'
	      			},
	      			{
	      				date: '01/05/2018',
	      				amount: -300,
	      				label: 'Utilities'
	      			}
	      		]
			},
			{
				month: '01/2018',
			    income: 2000,
	      		expenses: 1100,
	      		startingBalance: 0,
	      		endingBalance: 900,
	      		lineItems: [
	      			{
	      				date: '01/01/2018',
				        amount: 2000,
				        label: 'wages'
	      			},
	      			{
	      				date: '01/01/2018',
	      				amount: -1000,
	      				label: 'rent'
	      			},
	      			{
	      				date: '01/05/2018',
	      				amount: -300,
	      				label: 'Utilities'
	      			}
	      		]
			}
		]
	}

	function ledgerArray() {
		return state.budgets;
	}

	return(
		<div>
			{ledgerArray()}
		</div>
	)
}