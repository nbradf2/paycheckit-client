import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link} from 'react-router-dom';
import './loginForm.css';

export class LoginForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}

	render () {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}

		return (
			<form
				className="login-form"
				id="loginForm"
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>
				<h2>Log In</h2>
				<div className="input">
					{error}
					<label htmlFor="username" hidden>Username</label>
					<Field 
						component={Input}
						type="text"
						name="username"
						validate={[required, nonEmpty]}
						placeholder="Username"
					/>
					<label htmlFor="password" hidden>Password</label>
					<Field 
						component={Input}
						type="password"
						name="password"
						validate={[required, nonEmpty]}
						placeholder="Password"
					/>
				</div>
				<button disabled={this.props.pristine || this.props.submitting}>Log in</button>
				<p>Not a registered user?  Click <Link to='/register'>here</Link>!</p>
			</form>
		)
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => 
		dispatch(focus('login', 'username'))
})(LoginForm);