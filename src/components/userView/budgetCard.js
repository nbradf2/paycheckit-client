import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerEntry from './budgetLedgerEntry';
import AddLedgerEntry from './addLedgerEntry';
import {addLedgerEntry} from './../../actions/budgetActions'
import './budgetCard.css';


export class BudgetCard extends React.Component {
	// would remove and put in AddLedgerEntry??
	addLedgerEntry(month, day, year, amount, label, amountType) {
		this.props.dispatch(addLedgerEntry((month, day, year, amount, label, amountType), this.props.index));
	}

	render() {
		const ledgerEntries = this.props.ledgerEntries.map((ledgerEntry, index) => {
			return (
					<BudgetLedgerEntry key={index} {...ledgerEntry} />
			)
			
		})

		return (
			<div>
				<h3>My Budget Entries</h3>
				<div>
					{ledgerEntries}
					<AddLedgerEntry 
						type="ledgerEntry"
						// no need to have onAdd here; should be dispached through AddLedgerEntry component
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