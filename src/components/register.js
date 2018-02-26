import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users'
import {login} from '../actions/auth';


import {Link} from 'react-router-dom';
import './register.css';

export default function Register(props) {
	return(
		<form id="registerForm">
			<h2>Register</h2>
			<div className="input">
				<label htmlFor="firstName" hidden>First Name</label>
				<input type="text" name="firstName" id="firstName" placeholder="First Name"/>
				<label htmlFor="lastName" hidden>Last Name</label>
				<input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
				<label htmlFor="registerUsername" hidden>Username</label>
				<input type="text" name="registerUsername" id="registerUsername" placeholder="Username"/>
				<label htmlFor="registerPassword" hidden>Password</label>
				<input type="text" name="registerPassword" id="registerPassword" placeholder="Password"/>
				<label htmlFor="repeatPassword" hidden>Repeat Password</label>
				<input type="text" name="repeatPassword" id="repeatPassword" placeholder="Repeat Password"/>
			</div>
			<button type="submit">Submit</button>
			<p>Already have an account?  Click <Link to="/loginForm">here</Link>!</p>
		</form>
	);
}