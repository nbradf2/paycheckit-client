export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (month, startingBalance, income, expenses, endingBalance) => ({
	type: ADD_BUDGETCARD,
	month,
	startingBalance,
	income,
	expenses,
	endingBalance,
});