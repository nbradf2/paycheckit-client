import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerEntry from './budgetLedgerEntry';
import AddLedgerEntry from './addLedgerEntry';
import './budgetCard.css';

export class BudgetDetails extends React.Component {

	render() {
		console.log("details ledger: " + this.props.ledgerEntries)
		const ledgerEntries = this.props.ledgerEntries.map((ledgerEntry, index) => {
			return (
				<BudgetLedgerEntry entryId={ledgerEntry._id} key={index} {...ledgerEntry} />
			)
		})

		return (
			<div className="budgetDetails row">
				<h3>My Budget Entries</h3>
				<div className="hi">
					{ledgerEntries}	
					<AddLedgerEntry />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	ledgerEntries: state.budget.ledgerEntries
})

export default connect(mapStateToProps)(BudgetDetails);