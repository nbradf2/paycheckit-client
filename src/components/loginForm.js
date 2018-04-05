import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link, Redirect} from 'react-router-dom';
import './loginForm.css';

class LoginFormComponent extends React.Component {
	onSubmit(values) {
		console.log(values)
		return this.props.dispatch(login(values.username, values.password));
	}

	render () {
		let error;
		if (this.props.loggedIn) {
			return <Redirect to="/userHome" />
		}

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
				<p>Not a registered user?  Click <Link to='/registrationPage'>here</Link>!</p>
				<div className="demo">
					<p>Try it out!</p>
					<p className="demoUser">Username: demo</p>
					<p className="demoUser">Password: testertester</p>
				</div>
			</form>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export const LoginForm = connect(mapStateToProps)(LoginFormComponent);

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => 
		dispatch(focus('login', 'username'))
})(LoginForm);