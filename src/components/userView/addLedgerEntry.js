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
		let ledgerEntry = {};
		ledgerEntry.month = this.monthInput.value;
		const month = this.monthInput.value;
		const day = this.dayInput.value;
		const year = this.yearInput.value;
		const amount = this.amountInput.value;
		const label = this.labelInput.value;
		const amountType = this.amountType.value;
		if ((month, day, year, amount, label, amountType) && this.props.onAdd) {
			this.props.onAdd(this.monthInput.value,
							 this.dayInput.value,
							 this.yearInput.value,
							 this.amountInput.value,
							 this.labelInput.value,
							 this.amountType.value);
		}
		this.monthInput.value = '';
		this.dayInput.value = '';
		this.yearInput.value = '';
		this.amountInput.value = '';
		this.labelInput.value = '';
		this.amountType.value = '';
		{/*ADD DISPATCH HERE TO DATABASE*/}
	}

	setEditing(editing) {
		this.setState({
			editing
		});
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

		return (
			<form id="addLedgerEntry" className="row" onSubmit={this.onSubmit}>
				<div className="input col-9">
					<h2>Add Item</h2>
					<label htmlFor="month" hidden>Month</label>
					<input type="number" min="1" max="12" name="month" id="month" ref={input => this.monthInput=input} placeholder="month"/>
					<label htmlFor="day" hidden>day</label>
					<input type="number" min="1" max="31" name="day" id="day" ref={input => this.dayInput=input} placeholder="day"/>
					<label htmlFor="year" hidden>year</label>
					<input type="number" min="2018" name="year" id="year" ref={input => this.yearInput=input} placeholder="year"/>
					<label htmlFor="amount" hidden>Amount</label>
					<input type="number" name="amount" id="amount" ref={input => this.amountInput=input} placeholder="Amount"/>
					<label htmlFor="label" hidden>Item Label</label>
					<input type="text" name="label" id="label" ref={input => this.labelInput=input} placeholder="Label"/>
					<div className="paymentType">
						<h4 className="income">Income</h4>
						<input type="radio" name="income" id="paycheck" ref={input => this.amountType=input} value="Paycheck"/>
						<label htmlFor="paycheck">Paycheck</label>
						<input type="radio" name="income" id="addOther" ref={input => this.amountType=input} value="Other"/>
						<label htmlFor="addOther">Other</label>
						<h4 className="payment">Payment</h4>
						<input type="radio" name="expense" id="creditCard" ref={input => this.amountType=input} value="Credit Card"/>
						<label htmlFor="creditCard">Credit Card</label>
						<input type="radio" name="expense" id="savings" ref={input => this.amountType=input} value="Savings"/>
						<label htmlFor="savings">Savings</label>
						<input type="radio" name="expense" id="loan" ref={input => this.amountType=input} value="Loan"/>
						<label htmlFor="loan">Loan</label>
						<input type="radio" name="expense" id="utility" ref={input => this.amountType=input} value="Utility"/>
						<label htmlFor="utility">Utility</label>
						<input type="radio" name="expense" id="personal" ref={input => this.amountType=input} value="Personal"/>
						<label htmlFor="personal">Personal</label>
						<input type="radio" name="expense" id="minusOther" ref={input => this.amountType=input} value="Other"/>
						<label htmlFor="minusOther">Other</label>
					</div>
					<button type="submit">Add</button>
					<button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
				</div>
			</form>
		);
	}
}