import React from 'react';
import './addCardForm.css';

export default function AddCardForm(props) {
	return(
		<form id="addCard">
			<h2>Add Item</h2>
			<div className="input">
				<label htmlFor="itemDate" hidden>itemDate</label>
				<input type="text" name="itemDate" id="itemDate" placeholder="Date"/>
				<label htmlFor="itemAmount" hidden>Item Amount</label>
				<input type="text" name="itemAmount" id="itemAmount" placeholder="Amount"/>
				<label htmlFor="itemLabel" hidden>Item Label</label>
				<input type="text" name="itemLabel" id="itemLabel" placeholder="Label"/>
				<div className="paymentType">
					<p className="income">Income</p>
					<input type="checkbox" name="paycheck" id="paycheck" />
					<label htmlFor="paycheck">Paycheck</label>
					<input type="checkbox" name="addSavings" id="addSavings" />
					<label htmlFor="addSavings">Savings</label>
					<input type="checkbox" name="addOther" id="addOther" />
					<label htmlFor="addOther">Other</label>
					<p className="payment">Payment</p>
					<input type="checkbox" name="credtCard" id="creditCard"/>
					<label htmlFor="creditCard">Credit Card</label>
					<input type="checkbox" name="minusSavings" id="minusSavings"/>
					<label htmlFor="minusSavings">Savings</label>
					<input type="checkbox" name="loan" id="loan" />
					<label htmlFor="loan">Loan</label>
					<input type="checkbox" name="utility" id="utility" />
					<label htmlFor="utility">Utility</label>
					<input type="checkbox" name="personal" id="personal"/>
					<label htmlFor="personal">Personal</label>
					<input type="checkbox" name="minusOther" id="minusOther"/>
					<label htmlFor="minusOther">Other</label>
				</div>
			</div>
			<button type="submit">Add Item</button>
		</form>
	);
}