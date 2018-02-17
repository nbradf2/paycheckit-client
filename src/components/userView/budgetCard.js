import React from 'react';
import {connect} from 'react-redux';
// import BudgetDetails from './budgetDetails';
import './budgetCard.css';

export class BudgetCard extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.budgetMonth}</h3>
				<ul>
					<li>{this.props.startingBalance}</li>
					<li>{this.props.income}</li>
					<li>{this.props.expenses}</li>
					<li>{this.props.endingBalance}</li>
					{/*ledgerEntries*/}
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