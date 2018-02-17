export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (budgetMonth, budgetYear) => ({
	type: ADD_BUDGETCARD,
	budgetMonth,
	budgetYear
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
