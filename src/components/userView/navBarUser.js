import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import './navBarUser.css';

export class NavBarUser extends React.Component {
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
			<div className="row nav-bar-users">
				<h1 className="col-6">Paycheckit</h1>
				<nav className="col-6 nav-users">
					{logOutButton}
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBarUser);