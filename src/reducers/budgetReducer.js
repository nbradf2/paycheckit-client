import * as actions from '../actions/budgetActions';
// removed LEDGERS - find this and remove

const initialState = {
	ledgerEntries: [
		{
			id: '001',
			month: 1,
			day: 22,
			year: 2018,
			amount: 1000,
			label: 'Paycheck',
			type: 'income',
			category: 'Job'
		},
		{
			id: '002',
			month: 1,
			day: 25,
			year: 2018,
			amount: -400,
			label: 'Rent',
			type: 'expense',
			category: 'Rent'
		},
		{
			id: '003',
			month: 2,
			day: 1,
			year: 2018,
			amount: -75,
			label: 'MasterCard',
			type: 'expense',
			category: 'Credit Card'
		},
		{
			id: '004',
			month: 2,
			day: 15,
			year: 2018,
			amount: -105,
			label: 'Verizon',
			type: 'expense',
			category: 'Utility'
		},
		{
			id: '004',
			month: 3,
			day: 3,
			year: 2018,
			amount: -105,
			label: 'Electric',
			type: 'expense',
			category: 'Utility'
		},
		{
			id: '004',
			month: 3,
			day: 10,
			year: 2018,
			amount: -105,
			label: 'Visa',
			type: 'expense',
			category: 'Credit Card'
		}
	],
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
		return action.board;
	}
	return state;
}





















