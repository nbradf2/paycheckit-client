import {API_BASE_URL} from '../config';

export const ADD_LEDGER_ENTRY = 'ADD_LEDGER_ENTRY';
export const addLedgerEntry = (ledgerEntry) => ({
	type: ADD_LEDGER_ENTRY,
	ledgerEntry
})

export const UPDATE_SUMMARIES = 'UPDATE_SUMMARIES';
export const updateSummaries = (ledger) => {

	let createMonthly = () => {
		let monthly = {}
	    monthly.startingBalance = 0;
	    monthly.month = 0;
	    monthly.year = 0;
	    monthly.income = 0;
	    monthly.expenses = 0;
	    monthly.endingBalance = 0;
	    return monthly;
	}

	let summary = [];
	let monthlyBudget = createMonthly();
	let endingBalance = 0;
	if (ledger.length === 0) {
		return ({
			type: UPDATE_SUMMARIES,
			summary
		})
	}

	let currentMonth = ledger[0].month;
	let currentYear = ledger[0].year;
	monthlyBudget.month = currentMonth;
	monthlyBudget.year = currentYear; 

	for (let i=0; i<ledger.length; i++) {
		if (ledger[i].month !== currentMonth) {
			monthlyBudget.endingBalance = monthlyBudget.startingBalance + monthlyBudget.income + monthlyBudget.expenses;
			summary.push(monthlyBudget);
			endingBalance = monthlyBudget.endingBalance;
			monthlyBudget = createMonthly();
			monthlyBudget.startingBalance = endingBalance;
			monthlyBudget.month = ledger[i].month;
			monthlyBudget.year = ledger[i].year;
			currentMonth = monthlyBudget.month;
		} 
		if (ledger[i].amount > 0) {
		  monthlyBudget.income += ledger[i].amount;
		} else {
		  monthlyBudget.expenses += ledger[i].amount;
		}
		monthlyBudget.endingBalance += ledger[i].amount;
	}
	monthlyBudget.endingBalance += monthlyBudget.startingBalance;
	summary.push(monthlyBudget);

	return ({
		type: UPDATE_SUMMARIES, 
		summary
	})
}

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = budget => ({
	type: FETCH_BOARD_SUCCESS,
	budget
});

export const fetchBoard = (user) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	fetch (`${API_BASE_URL}/budget/${user}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
	.then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(budget => {
		dispatch(fetchBoardSuccess(budget));
		dispatch(updateSummaries(budget));
	});
};

export const getBudget = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	fetch(`${API_BASE_URL}/budget`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`		
		},
		success: function(userData) {
			console.log(userData);
		}
	});
}

export const postBudget = (ledgerEntry) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	const user = getState().auth.currentUser.username;
	fetch(`${API_BASE_URL}/budget`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'			
		},
		body: JSON.stringify(ledgerEntry)
	})
	.then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(entry => {
		console.log(`entry is: ${entry._id}`)
		dispatch(fetchBoard(user));
	});
}

export const deleteItem = (id) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	const user = getState().auth.currentUser.username;
	fetch(`${API_BASE_URL}/budget/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'			
		},
	})
	.then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		// return res.json()
	})
	.then(entry => {
		dispatch(fetchBoard(user));
	})
}

