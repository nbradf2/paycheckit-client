import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerEntry from './budgetLedgerEntry';
import AddLedgerEntry from './addLedgerEntry';
import BudgetSummary from './budgetSummary';
import {addLedgerEntry, updateSummaries} from './../../actions/budgetActions'
import './budgetCard.css';

// use BudgetDetails for code example to eventually map through summaries

export class BudgetCard extends React.Component {
	componentWillMount() {
		this.props.dispatch(updateSummaries(this.props.monthlySummaries));
	}

	// map over SUMMARIES instead of ENTRIES
	render() {
		const monthlySummaries = this.props.monthlySummaries.map((summary, index) => {
			return (
				<BudgetSummary key={index} {...summary} />
			)
		})

		return (
			<div>
				<h3>My Budget Entries</h3>
				<div>
					{monthlySummaries}
					<AddLedgerEntry />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	monthlySummaries: state.monthlySummaries
})

export default connect(mapStateToProps)(BudgetCard);