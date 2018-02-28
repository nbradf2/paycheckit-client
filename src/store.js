import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import budgetReducer from './reducers/budgetReducer';

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		budget: budgetReducer
	}), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;