import React from 'react';
import './loginForm.css';

export default function LoginForm(props) {
	return(
		<form>
			<h2>Log In</h2>
			<label htmlFor="username" hidden>Username</label>
			<input type="text" name="username" id="username" placeholder="Username"/>
			<label htmlFor="password" hidden>Password</label>
			<input type="text" name="password" id="password" placeholder="Password"/>
			<button type="submit">Submit</button>
		</form>
	);
}