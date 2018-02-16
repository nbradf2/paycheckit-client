import React from 'react';
import BudgetCard from './budgetCard';
import AddBudgetCard from './addBudgetCard';
import {connect} from 'react-redux';
import {addBudgetCard} from './../../actions/budgetActions'
import './budgetBoard.css';

// will put CARD components into the board.  for 3 months of data, will have 3 cards showing summary data (starting balance, income, expenses, ending balance)
// clicking on one card will show BUDGET DETAILS; EVERY list item with summary data
// can edit or DELETE any of the line items/details
// UserHome -> BudgetBoard (show all cards to view all budgets/months or create new budget/month - takes data from ending balance 
// of last and makes it starting balance of new)-> AddCard/BudgetForm -> BudgetCard (one box with summary **code we wrote on Replit** - starting/ending/income, etc.) one card for each monthly summary ->
// -> BudgetDetails (shows all summary + budgetLedgerEntry) -> BudgetLedgerEntry (add an expense/income) -> Add ledgerEntryForm

export class BudgetBoard extends React.Component {
	addBudgetList(month) {
		this.props.dispatch(addBudgetList(month));
	}

	render() {
		const budgetList = this.props.budgetList.map((budgetList, index) => (
			<li key={index}>
				<BudgetList index={index} {...budgetList} />
			</li>
		));

		return (
			<div>
				<h2>My Budget</h2>
				<ul>
					{budgetList}
					<li>
						<AddCardForm 
							type="list"
							onAdd={month => this.addBudgetList(month)}
						/>
					</li>
				</ul>
			</div>
		);
	}
}

BudgetBoard.defaultProps = {
	month: 'January'
}

const mapStateToProps = state => ({
	budgetList: state.budgetList
});

export default connect(mapStateToProps)(BudgetBoard);