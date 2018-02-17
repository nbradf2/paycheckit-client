import React from 'react';
import {connect} from 'react-redux';
import BudgetCard from './budgetCard';
import AddBudgetCard from './addBudgetCard';
import {addBudgetCard} from './../../actions/budgetActions';
import './budgetBoard.css';

export class BudgetBoard extends React.Component {
	addBudgetCard(budgetMonth, budgetYear, ledgerEntries) {
		this.props.dispatch(addBudgetCard(budgetMonth, budgetYear, ledgerEntries));
	}

	render() {
		const budgets = this.props.budgets.map((budget, index) => (
			<li>
				<BudgetCard index={index} {...budget} />
			</li>
		));

		return (
			<div className="budgetBoard">
				<h2>My Budgets</h2>
				<ul>
					{budgets}
					<AddBudgetCard 
						type="budget"
						onAdd={budgetMonth => this.addBudgetCard(budgetMonth),
							   budgetYear => this.addBudgetCard(budgetYear),
							   ledgerEntries => this.addBudgetCard(ledgerEntries)}
					/>
				</ul>
			</div>
		);
	}
}

BudgetBoard.defaultProps = {
	budgetMonth: 'January',
	budgetYear: 2018
};

const mapStateToProps = state => ({
	budgets: state.budgets
});

export default connect(mapStateToProps)(BudgetBoard);