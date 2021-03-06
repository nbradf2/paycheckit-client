import React from 'react';
import './hero.css';

export default function Hero(props) {
	return(
		<div className="row" id="hero">
			<h1>Paycheck Planner</h1>
			<p>Because living paycheck to paycheck doesn't have to be so hard.</p>
			<a href="#about"><i className="fa fa-angle-double-down"></i></a>
		</div>
	);
}