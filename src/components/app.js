import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import LandingPage from './landingPage';
import NavBarPublic from './navBarPublic';
import RegistrationPage from './registration-page';
import LoginForm from './loginForm';
import UserHome from './userView/userHome';
import Footer from './footer';
import {refreshAuthToken} from '../actions/auth';
import './landingPage.css';

export class App extends React.Component {

	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn && !this.props.loggedIn) {
			this.startPeriodicRefresh();
		} else if (!nextProps.loggedIn && this.props.loggedIn) {
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000
		);
	}

	stopPeriodicRefresh() {
		if (!this.refreshInterval) {
			return;
		}

		clearInterval(this.refreshInterval);
	}

	render() {
		return (
			<div className="app">
				<NavBarPublic />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/registrationPage" component={RegistrationPage} />
					<Route exact path="/loginForm" component={LoginForm} />
					<Route exact path="/userHome" component={UserHome} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));