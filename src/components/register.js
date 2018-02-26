import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users'
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import {Link} from 'react-router-dom';
import './register.css';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class Register extends React.Component {
	onSubmit(values) {
		const {username, password, firstName, lastName} = values;
		const user = {username, password, firstName, lastName};
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	render() {
		return (
			<form
				className="login-form"
				id="registerForm"
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>
				<h2>Register</h2>
				<div className="input">
					<label htmlFor="firstName">First Name</label>
					<Field component={Input} type="text" name="firstName" id="firstName"/>
					<label htmlFor="lastName">Last Name</label>
					<Field component={Input} type="text" name="lastName" id="lastName"/>
					<label htmlFor="username">Username</label>
					<Field 
						component={Input}
						type="text"
						name="username"
						validate={[required, nonEmpty, isTrimmed]}
					/>
					<label htmlFor="password">Password</label>
					<Field 
						component={Input}
						type="password"
						name="password"
						validate={[required, passwordLength, isTrimmed]}
					/>
					<label htmlFor="passwordConfirm">Confirm Password</label>
					<Field 
						component={Input}
						type="password"
						name="passwordConfirm"
						validate={[required, nonEmpty, matchesPassword]}
					/>
					</div>
					<button 
						type="submit"
						disabled={this.props.pristine || this.props.submitting}>
						Register
					</button>
					<p>Already have an account?  Click <Link to="/loginForm">here</Link>!</p>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('registration', Object.keys(errors)[0]))
}) (Register);