import * as actions from '../actions/budgetActions';

const initialState = {
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

};

export default function budgetReducer(state=initialState, action) {
	
	{/*Series of IF statements that will return new versions of the state*/}
	return state;
}

