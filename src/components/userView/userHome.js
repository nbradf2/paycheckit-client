import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import BudgetBoard from './budgetBoard';
import './userHome.css';

export function UserHome(props) {
	return (
		<div className="userHome">
			<div className="userHello">Hello, {props.name}!</div>
			<BudgetBoard />
		</div>
	);
}

const mapStateToProps = state => {
	const {currentUser} = state.auth;
	return {
		name: `${currentUser.firstName} ${currentUser.lastName}`
	}
}

export default requiresLogin()(connect(mapStateToProps)(UserHome));