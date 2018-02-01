import React from 'react';
import '../normalize.css';
import '../grid.css';
import '../index.css';
import './dashboard.css';

export default function Dashboard(props) {
	return (
		<div>
			{/** NAV BAR **/}
			<section>
				<h1>Paycheck<span>It</span></h1>
				<p>Because living paycheck to paycheck doesn't have to be so hard.</p>
				<i className="fas fa-3x fa-angle-double-down"></i>
			</section>
			<section>
				<i className="fas fa-tasks"></i>
				<p>Plan your income and payments in advance with Paycheckit.</p>
				<p>Got paid? <i className="far fa-money-bill-alt"></i></p>
				<p><i className="fas fa-credit-card"></i> Paid a bill?</p>
				<p>Check it off!</p>
				<i className="far fa-check-square"></i>
			</section>
			<section>
				{/** LOGIN **/}
			</section>
		</div>
	);
}