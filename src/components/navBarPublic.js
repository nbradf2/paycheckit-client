import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearAuth} from './../actions/auth';
import {clearAuthToken} from './../local-storage';
import './navBarPublic.css';

export class NavBarPublic extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {

		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = (
				<button onClick={() => this.logOut()}>Log out</button>
			);
		}

		return (
			<div className="row nav-bar-public row">
				<h1 className="col-6"><Link to="/">Paycheck Planner</Link></h1>
				<nav className="col-6 nav-public">
					<ul id="menu">
						<Link to="/loginForm">Log in</Link>
						<Link to="/registrationPage">Register</Link>
					</ul>
					{logOutButton}
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBarPublic);