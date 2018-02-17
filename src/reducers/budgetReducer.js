import * as actions from '../actions/budgetActions';

const initialState = {
	ledger: [
		{
			id: '001',
			checked: false,
			date: '02/02/18',
			amount: 1000,
			label: 'Paycheck'
		},
		{
			id: '002',
			checked: false,
			date: '02/10/18',
			amount: -400,
			label: 'Rent'
		},
		{
			id: '003',
			checked: false,
			date: '02/10/18',
			amount: -75,
			label: 'MasterCard'
		},
		{
			id: '004',
			checked: false,
			date: '02/02/18',
			amount: -105,
			label: 'Verizon'
		}
	],

	budgetList: [
		{
			month: 1,
			year: 2018,
			startingBalance: 1000,
			income: 2000,
			expenses: 500,
			endingBalance: 3000
		}
	]
};

export default function budgetReducer(state=initialState, action) {
	if (action.type === actions.ADD_BUDGETCARD) {
		let budgetList = state.budgetList.map((budgetList, index) => {
			if (index !== action.budgetListIndex) {
				return budgetList;
			}
			return Object.assign({}, budgetList, {
				lineItems: [...budgetList.lineItems, {
					budget: 'January 2018',
					checked: action.checked,
					date: action.date,
					amount: action.amount,
					label: action.label
				}]
			});
		});

		return Object.assign({}, state, {
			budgetList
		});
	}
	return state;
}

