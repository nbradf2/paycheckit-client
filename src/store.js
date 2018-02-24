import {createStore} from 'redux';
import budgetReducer from './reducers/budgetReducer';

const store = createStore(budgetReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;