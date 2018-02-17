import React from 'react';
import './addBudgetCard.css';

export default class AddBudgetCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const month = this.monthInput.value.trim();
		if (month && this.props.onAdd) {
			this.props.onAdd(this.monthInput.value);
		}
		this.monthInput.value = '';
	}

	setEditing(editing) {
		this.setState({
			editing
		});
	}

	render() {
		if (!this.state.editing) {
			return (
				<button onClick={() => this.setEditing(true)}>
					Add a budget
				</button>
			);
		}

		return (
			<form onSubmit={this.onSubmit}>
				<input type="month" ref={input => this.monthInput = input} />
				<button>Add</button>
				<button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
			</form>
		);
	}
}