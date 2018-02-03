import React from 'react';
import '../normalize.css';
import '../index.css';

import './loginForm.css';



export default function LoginForm(props) {
	return(
		<form>
			<h2>Log In</h2>
			<div className="input">
				<label htmlFor="username" hidden>Username</label>
				<input type="text" name="username" id="username" placeholder="Username"/>
				<label htmlFor="password" hidden>Password</label>
				<input type="text" name="password" id="password" placeholder="Password"/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}