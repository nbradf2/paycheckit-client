import React from 'react';
import './addBudgetForm.css';

// RENAME THIS THE BudgetFullView

// current budget will be a state property
// is an object with array of income and expenses
// if no records, will only see headers and add button
// set up construct of consistent line items that can carry 
// over to new budget
// each line item is a component

// Form with just:
// date
// Starting balance, 
// header sections for income/expenses
	// will have add buttons
	// will be line item components here if carrying over
		// with add and edit icons
// Remaining balance

// Think of actions as -add a record -add a record 'success' -add a record 'failure'
// Look at dispatch sequence of events in React JWT Auth code (in authorization section)

// will still have mock data, but move it from the component to the reducer

// for Mongo - will have individual line items, and will query date 
// range date amount label type
// logic: take all records in db and add/subtract accordingly
// reducer for budget
// reducer for authentication
// budget will have some context of all monthly records
// budget will have some contect of the current budget

export default function AddBudgetForm(props) {
	return(
		<p>text</p>
	);
}

