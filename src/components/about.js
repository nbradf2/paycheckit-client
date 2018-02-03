import React from 'react';
import './about.css'

export default function About(props) {
	return(
		<div className="about">
			<h2>Plan your income and payments in advance with Paycheckit.</h2>		
			<i className="fas fa-5x fa-tasks"></i>
			<p className="left-side">Got paid? <i className="far fa-2x fa-money-bill-alt"></i></p>
			<p className="right-side"><i className="fas fa-2x fa-credit-card"></i> Paid a bill?</p>
			<p>Check it off!</p>
			{/*<i className="far fa-3x fa-check-square"></i>*/}
			{/*<div className="font-awesome">			
			<i className="fas fa-3x fa-angle-double-down" data-fa-transform="down-10"></i>
			</div>*/}
		</div>
	);
}