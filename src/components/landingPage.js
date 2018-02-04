import React from 'react';
import NavBarPublic from './navBarPublic';
import Hero from './hero';
import About from './about';
import Footer from './footer'
import LoginForm from './loginForm';
import Register from './register';
import UserHome from './userHome';
import BudgetBoard from './budgetBoard';
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
		href: '#'
	}]

	return (
		<div>
			<NavBarPublic title="PaycheckIt" links={links} />
			<Hero />
			<About />
			<LoginForm />
			<Register />
			<UserHome />
			<BudgetBoard />
			<Footer />
		</div>
	);
}