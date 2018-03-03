import {ADD_LEDGER_ENTRY, UPDATE_SUMMARIES} from '../actions/budgetActions';
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
		type: null,
		category: null
	}
}

export default function budgetReducer(state=initialState, action ) {
	if (action.type === ADD_LEDGER_ENTRY) {
		return Object.assign({}, state, {
			ledgerEntries: [...state.ledgerEntries, action.ledgerEntry]
		});
	}

	else if (action.type === UPDATE_SUMMARIES) {
		return Object.assign({}, state, {
			monthlySummaries: action.summary
		})
	}
	return state;
}
