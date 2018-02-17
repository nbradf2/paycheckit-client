import React from 'react';
import './addLedgerEntry.css';

export default class AddLedgerEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const month = this.monthInput.value;
		const day = this.dayInput.value;
		const year = this.yearInput.value;
		const amount = this.amountInput.value;
		const label = this.labelInput.value;
		const type = this.typeInput.value;
		if ((month, day, year, amount, label, type) && this.props.onAdd) {
			this.props.onAdd(this.monthInput.value,
							 this.dayInput.value,
							 this.yearInput.value,
							 this.amountInput.value,
							 this.labelInput.value,
							 this.typeInput.value);
		}
		this.monthInput.value = '';
		this.dayInput.value = '';
		this.yearInput.value = '';
		this.amountInput.value = '';
		this.labelInput.value = '';
		this.typeInput.value = '';
	}

	setEditing(editing) {
		this.setState({
			editing
		});
	}

	render() {
		if (!this.state.editing) {
			return (
				<a href="#addLedgerEntry" onClick={() => this.setEditing(true)}>
					Add entry
				</a>
			);
		}

		return (
			<form id="addLedgerEntry" className="row" onSubmit={this.onSubmit}>
				<div className="input col-9">
					<h2>Add Item</h2>
					<label htmlFor="month" hidden>Month</label>
					<input type="month" name="month" id="month" ref={input => this.monthInput=input}/>
					<label htmlFor="day" hidden>day</label>
					<input type="number" min="1" max="31" name="day" id="day" ref={input => this.dayInput=input}/>
					<label htmlFor="year" hidden>year</label>
					<input type="number" min="2018" name="year" id="year" ref={input => this.yearInput=input}/>
					<label htmlFor="amount" hidden>Amount</label>
					<input type="number" name="amount" id="amount" ref={input => this.amountInput=input} placeholder="Amount"/>
					<label htmlFor="label" hidden>Item Label</label>
					<input type="text" name="label" id="label" ref={input => this.labelInput=input} placeholder="Label"/>
					<div className="paymentType">
						<h4 className="income">Income</h4>
						<input type="radio" name="income" id="paycheck" />
						<label htmlFor="paycheck">Paycheck</label>
						<input type="radio" name="income" id="addOther" />
						<label htmlFor="addOther">Other</label>
						<h4 className="payment">Payment</h4>
						<input type="radio" name="expense" id="creditCard"/>
						<label htmlFor="creditCard">Credit Card</label>
						<input type="radio" name="expense" id="minusSavings"/>
						<label htmlFor="minusSavings">Savings</label>
						<input type="radio" name="expense" id="loan" />
						<label htmlFor="loan">Loan</label>
						<input type="radio" name="expense" id="utility" />
						<label htmlFor="utility">Utility</label>
						<input type="radio" name="expense" id="personal"/>
						<label htmlFor="personal">Personal</label>
						<input type="radio" name="expense" id="minusOther"/>
						<label htmlFor="minusOther">Other</label>
					</div>
					<button onSubmit={this.onSubmit}>Add</button>
					<button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
				</div>
			</form>
		);
	}
}