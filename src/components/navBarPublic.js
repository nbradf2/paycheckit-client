import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from './../actions/auth';
import {clearAuthToken} from './../local-storage';
import './navBarPublic.css';

export class NavBarPublic extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		const links = this.props.links.map((link, index) => {
			<li key={index} className="nav-links">
				<a href={link.href}>
					{link.text}
				</a>
			</li>
		});

		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = (
				<button onClick={() => this.logOut()}>Log out</button>
			);
		}

		return (
			<div className="row nav-bar-public row">
				<h1 className="col-6">PaycheckIt</h1>
				<nav className="col-6 nav-public">
					<ul id="menu">{links}</ul>
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