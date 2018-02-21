export const ADD_LEDGER_ENTRY = 'ADD_LEDGER_ENTRY';
export const addLedgerEntry = (id, month, day, year, amount, label, amountType) => ({
	type: ADD_LEDGER_ENTRY,
	id,
	month,
	day,
	year,
	amount,
	label,
	amountType
})

// GETLEDGER, POSTLEDGER, etc.