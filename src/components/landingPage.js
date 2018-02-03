import React from 'react';
import Hero from './hero';
import About from './about';
import Footer from './footer'
import LoginForm from './loginForm';
import NavBarPublic from './navBarPublic';
import UserHome from './userHome';
import './landingPage.css';

export default function LandingPage(props) {
	const links = [{
		text: 'About',
		href: '#about'
	}, {
		text: 'Login',
		href: '#'
	}, {
		text: 'Register',
		href: '#'
	}]

	return (
		<div>
			<NavBarPublic title="PaycheckIt" links={links} />
			<Hero />
			<About />
			<LoginForm />
			<UserHome />
			<Footer />
		</div>
	);
}