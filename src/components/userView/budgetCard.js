import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerEntry from './budgetLedgerEntry';
import AddLedgerEntry from './addLedgerEntry';
import {addLedgerEntry} from './../../actions/budgetActions'
import './budgetCard.css';


export class BudgetCard extends React.Component {
	addLedgerEntry(month, day, year, amount, label, amountType) {
		this.props.dispatch(addLedgerEntry((month, day, year, amount, label, amountType), this.props.index));
	}

	render() {
		const ledgerEntries = this.props.ledgerEntries.map((ledgerEntry, index) => {
			<li>
				<BudgetLedgerEntry key={index} {...ledgerEntry} />
			</li>
		})
		return (
			<div>
				<h3>{this.props.budgetMonth} {this.props.budgetYear}</h3>
				<ul>
					<li>Starting Balance: {this.props.startingBalance}</li>
					<li>Income: {this.props.income}</li>
					<li>Expenses: {this.props.expenses}</li>
					<li>Ending Balance: {this.props.endingBalance}</li>
					{ledgerEntries}
					<BudgetLedgerEntry />
					<AddLedgerEntry 
						type="ledgerEntry"
						onAdd={(month, day, year, amount, label, amountType) => this.addLedgerEntry(month, day, year, amount, label, amountType)}
					/>
				</ul>
			</div>
		);
	}
}

BudgetCard.defaultProps = {
	budgetMonth: '',
	startingBalance: 0,
	income: 0,
	expenses: 0,
	endingBalance: 0
};

export default connect()(BudgetCard);