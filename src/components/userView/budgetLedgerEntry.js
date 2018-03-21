import React from 'react';
import {connect} from 'react-redux';
import {deleteItem} from './../../actions/budgetActions'
import './budgetLedgerEntry.css';

export class BudgetLedgerEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = { checked: false};
	}

	deleteItem(id) {
		this.props.dispatch(deleteItem(id))
	}

	render() {
		return (
			<div className="line">
				<p><span><input type="checkbox" /></span>{this.props.month}/{this.props.day}/{this.props.year}</p>
				<p>${this.props.amount}</p>
				<p>{this.props.label}</p>
				<p onClick={() => this.deleteItem(this.props.entryId)}><i className="fa fa-trash"></i></p>
			</div>
		)
	}
	
}

export default connect()(BudgetLedgerEntry);     