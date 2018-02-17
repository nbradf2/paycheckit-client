export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (budgetMonth, startingBalance, income, expenses, endingBalance) => ({
	type: ADD_BUDGETCARD,
	budgetMonth,
	startingBalance,
	income,
	expenses,
	endingBalance,
});

export const ADD_LEDGERENTRY = 'ADD_LEDGERENTRY';
export const addLedgerEntry = (id, checked, month, day, year, amount, label, type) => ({
	id,
	checked,
	month,
	day,
	year,
	amount,
	label,
	type
})
