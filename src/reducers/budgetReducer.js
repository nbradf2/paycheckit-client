import * as actions from '../actions/budgetActions';
// removed LEDGERS - find this and remove

const initialState = {
	ledgerEntries: [],
	monthlySummaries: [],
	ledgerEntry: {
		id: null,
		month: null,
		day: null,
		year: null,
		amount: null,
		label: null,
		amountType: null,
		category: null
	}
}

export default function budgetReducer(state=initialState, action ) {
	if (action.type === actions.ADD_LEDGER_ENTRY) {
		return Object.assign({}, state, {
			ledgerEntries: [...state.ledgerEntries, action.ledgerEntry]
		});
	}

	else if (action.type === actions.UPDATE_SUMMARIES) {
		return Object.assign({}, state, {
			monthlySummaries: action.summary
		})
	}
	else if (action.type === actions.FETCH_BOARD_SUCCESS) {
		return Object.assign({}, state, {
			ledgerEntries: action.budget
		})
	}
	return state;
}
