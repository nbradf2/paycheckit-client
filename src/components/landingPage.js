import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import NavBarPublic from './navBarPublic';
import Hero from './hero';
import About from './about';
import LoginForm from './loginForm';
import RegistrationPage from './registration-page';
import UserHome from './userView/userHome';
// import {refreshAuthToken} from '../actions/auth';
// import './landingPage.css';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/userHome" />
	}
	return (
		<div>
			<NavBarPublic />
			<Hero />
			<About />
			<Switch>
				<Route exact path="/loginForm" component={LoginForm} />
				<Route exact path="/registrationPage" component={RegistrationPage} />
				<Route exact path="/userHome" component={UserHome} />
			</Switch>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LandingPage));






