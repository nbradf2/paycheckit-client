import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import NavBarPublic from './navBarPublic';
import Hero from './hero';
import About from './about';
import Footer from './footer'
import LoginForm from './loginForm';
import Register from './register';
import UserHome from './userView/userHome';
import {refreshAuthToken} from '../actions/auth';
import './landingPage.css';

export class LandingPage extends React.Component {

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
				<LoginForm />
				<Route exact path="/register" component={Register} />
				<Route exact path="/userHome" component={UserHome} />
				<UserHome />
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LandingPage));






