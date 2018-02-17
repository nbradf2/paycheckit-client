export const ADD_BUDGETCARD = 'ADD_BUDGETCARD';
export const addBudgetCard = (budgetMonth, budgetYear) => ({
	type: ADD_BUDGETCARD,
	budgetMonth,
	budgetYear
});

export const ADD_LEDGER_ENTRY = 'ADD_LEDGER_ENTRY';
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
