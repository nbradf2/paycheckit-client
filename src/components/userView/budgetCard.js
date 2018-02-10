import React from 'react';
import {connect} from 'react-redux'
import './budgetCard.css';

function BudgetCard(props) {
	
	let rows = props.budget.map(function(line, index) {
		return (
			<div className="line" key={index}>
				<input type="checkbox" id="checkbox"/>
				<label htmlFor="checkbox" hidden></label>
				<p className="item">{line.date}</p>
				<p className="item">{line.amount}</p>
				<p className="item">{line.label}</p>
				<p className="item"><i className="fa fa-pencil"></i></p>
				<p className="item"><i className="fa fa-trash-o"></i></p>
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
			<h3>{props.date}</h3>
			<h3>{props.startingBalance}</h3>
			<div>{rows}</div>
			<button id="addNewBudget">Add New Budget</button>
			{/*Show detail button on top right of card*/}
		</div>
	);
}

const mapStateToProps = state => ({
	date: state.date,
	startingBalance: state.startingBalance,
	budget: state.budget
})

export default connect(mapStateToProps)(BudgetCard)