import React from 'react';
import {Link} from 'react-router-dom';
import './loginForm.css';

export default function LoginForm(props) {
	return(
		<form id="loginForm">
			<h2>Log In</h2>
			<div className="input">
				<label htmlFor="username" hidden>Username</label>
				<input type="text" name="username" id="username" placeholder="Username"/>
				<label htmlFor="password" hidden>Password</label>
				<input type="text" name="password" id="password" placeholder="Password"/>
			</div>
			<button type="submit"><Link to ={'/userHome'}>Submit</Link></button>
			<p>Not a registered user?  Click <Link to={'/register'}>here</Link>!</p>
		</form>
	);
} 