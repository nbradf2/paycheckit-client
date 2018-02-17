import * as actions from '../actions/budgetActions';

const initialState = {
	ledger: [
		{
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
		},
		{
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
		},
		{
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
		}
	],
	cards: [
		{
			budgetMonth: 'January',
			startingBalance: 500,
			income: 1000,
			expenses: 800,
			endingBalance: 700
		},
		{
			budgetMonth: 'February',
			startingBalance: 700,
			income: 1000,
			expenses: 800,
			endingBalance: 900
		}

	]
	
};

export default function budgetReducer(state=initialState, action) {
	if(action.type === actions.ADD_BUDGETCARD) {
		return Object.assign({}, state, {
			cards: [...state.cards, {
				budgetMonth: action.budgetMonth,
				startingBalance: action.startingBalance,
				income: action.income,
				expenses: action.expenses,
				endingBalance: action.endingBalance
			}]
		});
	}

	return state;
}
























