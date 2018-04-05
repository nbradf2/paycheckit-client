import React from 'react';
import {Link} from 'react-router-dom';
import './about.css'

export default function About(props) {
	return(
		<div id="about">
			<div className="row">
				<h2 className="col-12">Plan your income and payments in advance with Paycheck Planner.</h2>
			</div>
			<p className="col-6">Got paid? <i className="fa fa-money"></i></p>
			<p className="col-6">Paid a bill? <i className="fa fa-credit-card"></i></p>
			<p className="col-12">Track it!<i className="fa fa-check-square"></i></p>
			<button><Link to="/loginForm">Log in</Link></button>
			<button><Link to="/registrationPage">Register</Link></button>
		</div>
	);
}