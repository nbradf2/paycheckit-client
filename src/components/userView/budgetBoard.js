import React from 'react';
import {connect} from 'react-redux';
import BudgetCard from './budgetCard';
import AddBudgetCard from './addBudgetCard';
import {addBudgetCard} from './../../actions/budgetActions';
import './budgetBoard.css';

export class BudgetBoard extends React.Component {
	addBudgetCard(budgetMonth, startingBalance, income, expenses, endingBalance) {
		this.props.dispatch(addBudgetCard(budgetMonth, startingBalance, income, expenses, endingBalance));
	}

	render() {
		const cards = this.props.cards.map((card, index) => (
			<li>
				<BudgetCard index={index} {...card} />
			</li>
		));

		return (
			<div className="budgetBoard">
				<h2>My Budgets</h2>
				<ul>
					{cards}
					<li>
						<AddBudgetCard 
							type="card"
							onAdd={budgetMonth => this.addBudgetCard(budgetMonth)}
						/>
					</li>
				</ul>
			</div>
		);
	}
}

BudgetBoard.defaultProps = {
	budgetMonth: 'January',
	startingBalance: 100,
	income: 1000,
	expenses: 500,
	endingBalance: 600
};

const mapStateToProps = state => ({
	cards: state.cards
});

export default connect(mapStateToProps)(BudgetBoard);