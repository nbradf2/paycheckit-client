import React from 'react';
import './addCardForm.css';

export default function AddCardForm(props) {
	return(
		<form id="addCard" className="row">
			<div className="input col-9">
				<h2>Add Item</h2>
				<label htmlFor="itemDate" hidden>itemDate</label>
				<input type="text" name="itemDate" id="itemDate" placeholder="Date"/>
				<label htmlFor="itemAmount" hidden>Item Amount</label>
				<input type="text" name="itemAmount" id="itemAmount" placeholder="Amount"/>
				<label htmlFor="itemLabel" hidden>Item Label</label>
				<input type="text" name="itemLabel" id="itemLabel" placeholder="Label"/>
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
				<button type="submit">Add Item</button>
			</div>
		</form>
	);
}