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
			<div>
				<BudgetLedgerEntry index={index} {...ledgerEntry} />
			</div>
		})

		return (
			<div>
				<h3>My Budget Entries</h3>
				<div>
					{ledgerEntries}
					<AddLedgerEntry 
						type="ledgerEntry"
						onAdd={(month, day, year, amount, label, amountType) => this.addLedgerEntry(month, day, year, amount, label, amountType)}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	ledgerEntries: state.ledgerEntries
})

export default connect(mapStateToProps)(BudgetCard);