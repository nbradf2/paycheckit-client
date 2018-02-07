import React from 'react';
import './about.css'

export default function About(props) {
	return(
		<div id="about">
			<div className="row">
				<h2 className="col-12">Plan your income and payments in advance with Paycheckit.</h2>
			</div>
			<p className="col-6">Got paid? <i className="fa fa-money"></i></p>
			<p className="col-6">Paid a bill? <i className="fa fa-credit-card"></i></p>
			<p className="col-12">Check it off!<i className="fa fa-check-square"></i></p>	
			<i className="fa fa-angle-double-down" data-fa-transform="down-10"></i>
		</div>
	);
}