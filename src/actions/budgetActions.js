export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (month, startingBalance, income, lineItems, endingBalance, listIndex) => ({
	type: ADD_BUDGETCARD,
	month,
	startingBalance,
	income,
	lineItems,
	endingBalance,
});