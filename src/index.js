import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter} from 'react-router-dom'
import LandingPage from './components/landingPage';
import './normalize.css';
import './grid.css';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<LandingPage />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);

