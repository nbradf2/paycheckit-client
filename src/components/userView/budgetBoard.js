import React from 'react';
import {connect} from 'react-redux';
import BudgetCard from './budgetCard';
import AddBudgetCard from './addBudgetCard';
import {addBudgetCard} from './../../actions/budgetActions';
import './budgetBoard.css';

export class BudgetBoard extends React.Component {
	addBudgetCard(month, startingBalance, income, expenses, endingBalance) {
		this.props.dispatch(addBudgetCard(month, startingBalance, income, expenses, endingBalance));
	}

	render() {
		const cards = this.props.cards.map((card, index) => {
			<li key={index}>
				<BudgetCard index={index} {...card} />
			</li>
		});

		return (
			<div className="budgetBoard">
				<h2>My Budgets</h2>
				<ul>
					{cards}
					<li>
						<AddBudgetCard 
							type="card"
							onAdd={month = this.addBudgetCard(month)}
						/>
					</li>
				</ul>
			</div>
		);
	}
}

BudgetBoard.defaultProps = {
	month: ''
};

const mapStateToProps = state => ({
	cards: state.cards
});

export default connect(mapStateToProps)(BudgetBoard);