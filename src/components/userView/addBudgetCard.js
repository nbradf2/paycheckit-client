import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerEntry from './budgetLedgerEntry';
import AddLedgerEntry from './addLedgerEntry';
import {addLedgerEntry} from './../../actions/budgetActions';
import './addBudgetCard.css';

export default class AddBudgetCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const date = this.itemDate.value;
		const amount = this.itemAmount.value;
		const label = this.itemLabel.value;
		this.itemDate.value = '';
		this.itemAmount.value = 0;
		this.itemLabel.value = '';
		console.log(date, amount, label)
		{/*ADD DISPATCH HERE TO DATABASE*/}
	}

	setEditing(editing) {
		this.setState({
			editing
		})
	}

	render() {
		if (!this.state.editing) {
			return (
				<div className="add-button"
				onClick={() => this.setEditing(true)}>
					<button href="#addLedgerEntry">Add {this.props.type}</button>
				</div>
			)
		}

		return(
			<form id="addLedgerEntry" className="row" onSubmit={this.onSubmit}>
				<div className="input col-9">
					<h2>Add Item</h2>
					<label htmlFor="itemDate" hidden>itemDate</label>
					<input type="date" name="itemDate" id="itemDate" ref={input => this.itemDate=input} placeholder="Date"/>
					<label htmlFor="itemAmount" hidden>Item Amount</label>
					<input type="number" name="itemAmount" id="itemAmount" ref={input => this.itemAmount=input} placeholder="Amount"/>
					<label htmlFor="itemLabel" hidden>Item Label</label>
					<input type="text" name="itemLabel" id="itemLabel" ref={input => this.itemLabel=input} placeholder="Label"/>
					<div className="paymentType">
						<h4 className="income">Income</h4>
						<input type="radio" name="type" id="paycheck" />
						<label htmlFor="paycheck">Paycheck</label>
						<input type="radio" name="type" id="addSavings" />
						<label htmlFor="addSavings">Savings</label>
						<input type="radio" name="type" id="addOther" />
						<label htmlFor="addOther">Other</label>
						<h4 className="payment">Payment</h4>
						<input type="radio" name="type" id="creditCard"/>
						<label htmlFor="creditCard">Credit Card</label>
						<input type="radio" name="type" id="minusSavings"/>
						<label htmlFor="minusSavings">Savings</label>
						<input type="radio" name="type" id="loan" />
						<label htmlFor="loan">Loan</label>
						<input type="radio" name="type" id="utility" />
						<label htmlFor="utility">Utility</label>
						<input type="radio" name="type" id="personal"/>
						<label htmlFor="personal">Personal</label>
						<input type="radio" name="type" id="minusOther"/>
						<label htmlFor="minusOther">Other</label>
					</div>
					<button onSubmit={this.onSubmit}>Add Item</button>
					<button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
				</div>
			</form>
		);
	}
}