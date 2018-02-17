export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (budgetMonth, startingBalance, income, expenses, endingBalance) => ({
	type: ADD_BUDGETCARD,
	budgetMonth,
	startingBalance,
	income,
	expenses,
	endingBalance,
});