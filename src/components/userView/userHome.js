import React from 'react';
// import {connect} from 'react-redux';
import NavBarUser from './navBarUser';
import BudgetBoard from './budgetBoard';
import './userHome.css';

export default function UserHome(props) {
	
	return (
		<div className="userHome">
			<NavBarUser />
			<BudgetBoard />
		</div>
	);
}