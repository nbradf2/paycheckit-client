import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import LandingPage from './components/landingPage';
import registerServiceWorker from './registerServiceWorker';
import './normalize.css';
import './grid.css';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<LandingPage />
		</Router>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();

