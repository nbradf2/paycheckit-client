import React from 'react';
import {connect} from 'react-redux';
import BudgetSummary from './budgetSummary';
import './budgetCard.css';

export class BudgetCard extends React.Component {

	render() {
		console.log("card ledger: " + this.props.ledgerEntries)
		const monthlySummaries = this.props.monthlySummaries.map((summary, index) => {
			return (
				<BudgetSummary key={index} {...summary} />
			)
		})

		return (
			<div className="budgetCard">
				<h3>My Budget Summaries</h3>
				<div>
					{monthlySummaries}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	ledgerEntries: state.budget.ledgerEntries,
	monthlySummaries: state.budget.monthlySummaries
})
    
export default connect(mapStateToProps)(BudgetCard);