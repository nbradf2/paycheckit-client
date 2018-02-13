import * as actions from '../actions/budgetActions';

const initialState = {
	budgetList: [{
		month: 'January 2018',
		income: 2000,
		startingBalance: 1000,
		endingBalance: 3000,
		lineItems: [
			{
				checked: false,
				date: '02/02/18',
				amount: 1000,
				label: 'Paycheck'
			},
			{
				checked: false,
				date: '02/10/18',
				amount: 400,
				label: 'Savings'
			},
			{
				checked: false,
				date: '02/10/18',
				amount: -75,
				label: 'MasterCard'
			},
			{
				checked: false,
				date: '02/02/18',
				amount: -105,
				label: 'Verizon'
			}
		]
	}, {
		month: 'February 2018',
		income: 3000,
		startingBalance: 900,
		endingBalance: 3000,
		lineItems: [
			{
				checked: false,
				date: '02/02/18',
				amount: 1000,
				label: 'Paycheck'
			},
			{
				checked: false,
				date: '02/10/18',
				amount: 400,
				label: 'Savings'
			},
			{
				checked: false,
				date: '02/10/18',
				amount: -75,
				label: 'MasterCard'
			},
			{
				checked: false,
				date: '02/02/18',
				amount: -105,
				label: 'Verizon'
			}
		]
	}]
};

export default function budgetReducer(state=initialState, action) {
	if (action.type === actions.ADD_BUDGETLIST) {
		return Object.assign({}, state, {
			budgetList: [...state.lists, {
				month: action.month,
				lineItems: []
			}]
		});
	}
	else if (action.type === actions.ADD_BUDGETCARD) {
		let budgetList = state.budgetList.map((budgetList, index) => {
			if (index !== action.budgetListIndex) {
				return budgetList;
			}
			return Object.assign({}, budgetList, {
				lineItems: [...budgetList.lineItems, {
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

