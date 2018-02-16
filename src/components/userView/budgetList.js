import React from 'react';
import {connect} from 'react-redux';
import BudgetLedgerItem from './budgetLedgerItem'
import AddCardForm from './addCardForm';
import {addBudgetCard} from './../../actions/budgetActions';
import './budgetList.css';

export class BudgetList extends React.Component {
	addBudgetCard(startingBalance, income, expenses, endingBalance) {
		this.props.dispatch(addBudgetCard(startingBalance, this.props.index));
		this.props.dispatch(addBudgetCard(income, this.props.index));
		this.props.dispatch(addBudgetCard(expenses, this.props.index));
		this.props.dispatch(addBudgetCard(endingBalance, this.props.index));
	}	

	render() {
		const budgetLedgerItems = this.props.budgetLedgerItems.map((budgetLedgerItem, index) => 
			<li key={index}>
				<BudgetLedgerItem {...budgetLedgerItem} />
			</li>
		);
		return (
			<div>
				<h3>{this.props.month}</h3>
				<ul>
					{budgetLedgerItems}
					<li>
						<AddCardForm
							type="card"
							onAdd={startingBalance => this.addBudgetCard(startingBalance)}
						/>
					</li>
				</ul>
			</div>
		)
	}
}

BudgetList.defaultProps = {
	month: '',
	startingBalance: '',
	income: '',
	expenses: '',
	endingBalance: ''
};

export default connect()(BudgetList);