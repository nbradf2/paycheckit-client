import React from 'react';
import Footer from './footer'
import '../normalize.css';
import '../grid.css';
import '../index.css';
import './dashboard.css';

export default function Dashboard(props) {
	return (
		<div>
			{/** NAV BAR **/}
			<section>
				<div className="title">
					<h1>Paycheck<span>It</span></h1>
					<p>Because living paycheck to paycheck doesn't have to be so hard.</p>
				</div>
				<i className="fas fa-3x fa-angle-double-down" data-fa-transform="down-60"></i>
			</section>
			<section>
				<h2>Plan your income and payments in advance with Paycheckit.</h2>
					<div className="font-awesome">			
						<i className="fas fa-4x fa-tasks"></i>
					</div>
				<p>Got paid? <i className="far fa-2x fa-money-bill-alt"></i></p>
				<p><i className="fas fa-2x fa-credit-card"></i> Paid a bill?</p>
				<p>Check it off!</p>
				<i className="far fa-3x fa-check-square"></i>
				<div className="font-awesome">			
						<i className="fas fa-3x fa-angle-double-down" data-fa-transform="down-20"></i>
					</div>
			</section>
			<section>
				{/** LOGIN **/}
			</section>
			<Footer />
		</div>
	);
}