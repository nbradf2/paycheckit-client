import React from 'react';
import './hero.css';

export default function Hero(props) {
	return(
		<div className="title row">
			<h1>Paycheck<span>It</span></h1>
			<p>Because living paycheck to paycheck doesn't have to be so hard.</p>
			<i className="fa fa-angle-double-down"></i>
		</div>
	);
}