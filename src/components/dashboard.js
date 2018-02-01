import React from 'react';
import '../normalize.css';
import '../grid.css';

export default function Dashboard(props) {
	return (
		<div>
			{/** NAV BAR **/}
			<section>
				<h1>PaycheckIt</h1>
				<p>Budget your money</p>
				<p>Because living paycheck to paycheck doesn't have to be so hard.</p>
			</section>
			<section>
				<i class="fas fa-tasks"></i>
				<p>Plan your income and payments in advance with Paycheckit.</p>
				<p>Got paid? <i class="far fa-money-bill-alt"></i></p>
				<p><i class="fas fa-credit-card"></i> Paid a bill?</p>
				<p>Check it off!</p>
				<i class="far fa-check-square"></i>
			</section>
			<section>
				{/** LOGIN **/}
			</section>
		</div>
	);
}