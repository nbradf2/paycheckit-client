export const ADD_BUDGETLIST = 'ADD_BUDGETLIST';
export const addBudgetList = month => ({
	type: ADD_BUDGETLIST,
	month
});

export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (text, listIndex) => ({
	type: ADD_BUDGETCARD,
	text
});