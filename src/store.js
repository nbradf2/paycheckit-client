import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import budgetReducer from './reducers/budgetReducer';

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		protectedData: protectedDataReducer,
		budget: budgetReducer,
		reduxDevTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	}) 
	
);

export default store;