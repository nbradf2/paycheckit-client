export const ADD_BUDGETLIST = 'ADD_BUDGETLIST';
export const addBudgetList = month => ({
	type: ADD_BUDGETLIST,
	month
});

export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (startingBalance, income, lineItems, endingBalance, listIndex) => ({
	type: ADD_BUDGETCARD,
	startingBalance,
	income,
	lineItems,
	endingBalance,
});