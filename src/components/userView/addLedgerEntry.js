import React from 'react';
import './addLedgerEntry.css';

export default class AddLedgerEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const budgetMonth = this.budgetMonthInput.value.trim();
		if (budgetMonth && this.props.onAdd) {
			this.props.onAdd(this.budgetMonthInput.value);
		}
		this.budgetMonthInput.value = '';
	}

	setEditing(editing) {
		this.setState({
			editing
		});
	}

	render() {
		if (!this.state.editing) {
			return (
				<a href="#addBudget" onClick={() => this.setEditing(true)}>
					Add a budget
				</a>
			);
		}

		return (
			<form id="addBudget" onSubmit={this.onSubmit}>
				<input type="budgetMonth" ref={input => this.budgetMonthInput = input} />
				<button>Add</button>
				<button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
			</form>
		);
	}
}