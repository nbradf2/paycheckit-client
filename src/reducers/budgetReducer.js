import {ADD_LEDGER_ENTRY} from '../actions/budgetActions';
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
			amountType: 'income'
		},
		{
			id: '002',
			month: 1,
			day: 25,
			year: 2018,
			amount: -400,
			label: 'Rent',
			amountType: 'expense'
		},
		{
			id: '003',
			month: 2,
			day: 1,
			year: 2018,
			amount: -75,
			label: 'MasterCard',
			amountType: 'expense'
		},
		{
			id: '004',
			month: 2,
			day: 15,
			year: 2018,
			amount: -105,
			label: 'Verizon',
			amountType: 'expense'
		},
		{
			id: '004',
			month: 3,
			day: 3,
			year: 2018,
			amount: -105,
			label: 'Electric',
			amountType: 'expense'
		},
		{
			id: '004',
			month: 3,
			day: 10,
			year: 2018,
			amount: -105,
			label: 'Visa',
			amountType: 'expense'
		}
	]
}

export default function budgetReducer(state=initialState, action) {
	if (action.type === action.ADD_LEDGER_ENTRY) {
		return Object.assign({}, state, {
			ledgerEntries: [...state.ledgerEntries, {
				id: '',
				month: action.month,
				day: action.day,
				year: action.year,
				amount: action.amount,
				label: action.label,
				amountType: action.amountType
			}]
		});
	}
	return state;
}
























