export const ADD_LEDGER_ENTRY = 'ADD_LEDGER_ENTRY';
export const addLedgerEntry = (ledgerEntry) => ({
	type: ADD_LEDGER_ENTRY,
	ledgerEntry
})

export const UPDATE_SUMMARIES = 'UPDATE_SUMMARIES';
export const updateSummaries = (ledger) => {
	//compute summary

	let createMonthly = () => {
		let monthly = {}
	    monthly.startingBalance = 0;
	    monthly.month = 0;
	    monthly.year = 0;
	    monthly.startingBalance = 0;
	    monthly.income = 0;
	    monthly.expenses = 0;
	    monthly.endingBalance = 0;
	    return monthly;
	}

	let summary = [];
	let monthlyBudget = createMonthly();
	let endingBalance = 0;

	let currentMonth = ledger[0].month;
	let currentYear = ledger[0].month;
	monthlyBudget.month = currentMonth;
	monthlyBudget.year = currentYear; 

	for (let i=0; i<ledger.length; i++) {
		if (ledger[i].month !== currentMonth) {
			monthlyBudget.endingBalance = monthlyBudget.startingBalance + monthlyBudget.income + monthlyBudget.expenses;
			summary.push(monthlyBudget);
			endingBalance = monthlyBudget.endingBalance;
			monthlyBudget = createMonthly();
			monthlyBudget.startingBalance = endingBalance;
			monthlyBudget.month = ledger[i].month;
			monthlyBudget.year = ledger[i].year;
			currentMonth = monthlyBudget.month;
		}
		if (ledger[i].amount > 0) {
		  monthlyBudget.income += ledger[i].amount;
		} else {
		  monthlyBudget.expenses += ledger[i].amount;
		}
	}
	summary.push(monthlyBudget);

	return ({
		type: UPDATE_SUMMARIES, 
		summary
	})

}

// FETCH LEDGER will 
// GETLEDGER, POSTLEDGER, etc.