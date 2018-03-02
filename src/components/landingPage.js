import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import NavBarPublic from './navBarPublic';
import Hero from './hero';
import About from './about';
import LoginForm from './loginForm';
import RegistrationPage from './registration-page';
// import {refreshAuthToken} from '../actions/auth';
import './landingPage.css';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/userHome" />
	}
	const links = [{
		text: 'About',
		href: '#about'
	}, {
		text: 'Login',
		href: '#loginForm'
	}, {
		text: 'Register',
		href: '#register'
	}]
	return (
		<div>
			<NavBarPublic title="PaycheckIt" links={links}/>
			<Hero />
			<About />
			<Switch>
				<LoginForm exact path="/loginForm" component={LoginForm} />
				<Route exact path="/registrationPage" component={RegistrationPage} />
			</Switch>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LandingPage));






