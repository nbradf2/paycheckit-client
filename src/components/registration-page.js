import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Register from './register';

export function RegistrationPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/userHome" />;
	}

	return (
		<div>
			<Register />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);