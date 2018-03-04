import React from 'react';
import {connect} from 'react-redux';
import BudgetSummary from './budgetSummary';
import {updateSummaries} from './../../actions/budgetActions'
import './budgetCard.css';

export class BudgetCard extends React.Component {
	componentWillMount() {
		this.props.dispatch(updateSummaries(this.props.monthlySummaries));
	}

	render() {
		const monthlySummaries = this.props.monthlySummaries.map((summary, index) => {
			return (
				<BudgetSummary key={index} {...summary} />
			)
		})

		return (
			<div>
				<h3>My Budget Summaries</h3>
				<div>
					{monthlySummaries}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	monthlySummaries: state.budget.monthlySummaries
})

export default connect(mapStateToProps)(BudgetCard);