import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import NavBarUser from './navBarUser';
import BudgetBoard from './budgetBoard';
import './userHome.css';

export function UserHome(props) {}

	render() {
		const links = [{
			text: 'My Budget',
			href: '#myBudget'
		}, {
			text: 'Add Budget',
			href: '#addBudget'
		}]
		return (
			<div className="userHome">
				<NavBarUser title="PaycheckIt" links={links}/>
				<div>Hello, {this.props.name}!</div>
				<BudgetBoard />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const {currentUser} = state.auth;
	return {
		name: `${currentUser.firstName} ${currentUser.lastName}`
	}
}

export default requiresLogin()(connect(mapStateToProps)(UserHome));