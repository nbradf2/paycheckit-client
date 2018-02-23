import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBarPublic from './navBarPublic';
import Hero from './hero';
import About from './about';
import Footer from './footer'
import LoginForm from './loginForm';
import Register from './register';
import UserHome from './userView/userHome';
import './landingPage.css';

export default function LandingPage(props) {
	const links = [{
		text: 'About',
		href: '#about'
	}, {
		text: 'Login',
		href: '#loginForm'
	}, {
		text: 'Register',
		href: '#registerForm'
	}]

	return (
		<Router>
			<div>
				<NavBarPublic title="PaycheckIt" links={links} />
				<Hero />
				<About />
				<LoginForm />
				{/*<Route exact path="/register" component={Register}/>*/}
				<UserHome />
				<Footer />
			</div>
		</Router>
	);
}