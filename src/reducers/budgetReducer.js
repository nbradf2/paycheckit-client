import * as actions from '../actions/budgetActions';
// removed LEDGERS - find this and remove

const initialState = {
	budgets: [{
		budgetMonth: 'January',
		budgetYear: 2018,
		ledgerEntries: [{
			id: '001',
			checked: false,
			month: 1,
			day: 22,
			year: 2018,
			amount: 1000,
			label: 'Paycheck',
			type: 'income'
		},
		{
			id: '002',
			checked: false,
			month: 1,
			day: 25,
			year: 2018,
			amount: -400,
			label: 'Rent',
			type: 'expense'
		}]
	},
	{
		budgetMonth: 'February',
		budgetYear: 2018,
		ledgerEntries: [{
			id: '003',
			checked: false,
			month: 2,
			day: 1,
			year: 2018,
			amount: -75,
			label: 'MasterCard',
			type: 'expense'
		},
		{
			id: '004',
			checked: false,
			month: 2,
			day: 15,
			year: 2018,
			amount: -105,
			label: 'Verizon',
			type: 'expense'
		}]
	},
	{
		budgetMonth: 'March',
		budgetYear: 2018,
		ledgerEntries: [{
			id: '004',
			checked: false,
			month: 3,
			day: 3,
			year: 2018,
			amount: -105,
			label: 'Electric',
			type: 'expense'
		},
		{
			id: '004',
			checked: false,
			month: 3,
			day: 10,
			year: 2018,
			amount: -105,
			label: 'Visa',
			type: 'expense'
		}]
	}]
}

export default function budgetReducer(state=initialState, action) {
	if(action.type === actions.ADD_BUDGETCARD) {
		return Object.assign({}, state, {
			budgets: [...state.budgets, {
				budgetMonth: action.budgetMonth,
				budgetYear: action.budgetYear,
				ledgerEntries: []
			}]
		});
	}
	else if (action.type === actions.ADD_LEDGERENTRY) {
		let budgets = state.budgets.map((budget, index) => {
			if (index !== action.budgetIndex) {
				return budget;
			}
			return Object.assign({}, budget, {
				ledgerEntries: [...budgets.ledgerEntries, {
					id: '',
					checked: false,
					month: action.month,
					day: action.day,
					year: action.year,
					amount: action.amount,
					label: action.label,
					type: action.type
				}]
			})
		})
	}

	return state;
}
























