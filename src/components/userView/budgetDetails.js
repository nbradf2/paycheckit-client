import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerEntry from './budgetLedgerEntry';
import AddLedgerEntry from './addLedgerEntry';
import {addLedgerEntry, updateSummaries} from './../../actions/budgetActions'
import './budgetCard.css';

// shows individual ledger entries by month
export class BudgetDetails extends React.Component {
	componentWillMount() {
		this.props.dispatch(updateSummaries(this.props.ledgerEntries));
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
					<AddLedgerEntry />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	ledgerEntries: state.ledgerEntries
})

export default connect(mapStateToProps)(BudgetDetails);