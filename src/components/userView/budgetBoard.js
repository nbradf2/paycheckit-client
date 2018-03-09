import React from 'react';
import {connect} from 'react-redux';
import BudgetCard from './budgetCard';
import BudgetDetails from './budgetDetails';
import {fetchBoard} from '../../actions/budgetActions'
import './budgetBoard.css';

export class BudgetBoard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchBoard(this.props.user));
	}

	render() {
		return (
			<div className="budgetBoard">
				<h2>My Budgets</h2>
				<ul>
					<BudgetCard />
					<BudgetDetails />
				</ul>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	user: state.auth.currentUser.username
})

export default connect(mapStateToProps)(BudgetBoard);
