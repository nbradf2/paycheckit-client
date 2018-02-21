import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerEntry from './budgetLedgerEntry';
import AddLedgerEntry from './addLedgerEntry';
import {addLedgerEntry} from './../../actions/budgetActions'
import './budgetCard.css';


export class BudgetCard extends React.Component {

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

export default connect(mapStateToProps)(BudgetCard);