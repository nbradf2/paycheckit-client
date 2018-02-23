import React from 'react';
import {shallow} from 'enzyme';

import BudgetLedgerEntry from './budgetLedgerEntry';

describe('<BudgetLedgerEntry />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetLedgerEntry />);
	})

	it('Renders the ledgerEntry info', () => {
		const id = "0123";
		const day = 25;
		const year = 2018;
		const amount = 75;
		const label = "Visa";
		const amountType = "income";
		const wrapper = shallow(<BudgetLedgerEntry id={id}
												   month={month}
												   day={day}
												   year={year}
												   amount={amount}
												   label={label}
												   amountType={amountType})
		expect(wrapper.id()).toEqual(id);
		expect(wrapper.month()).toEqual(month);
		expect(wrapper.day()).toEqual(day);
		expect(wrapper.year()).toEqual(year);
		expect(wrapper.amount()).toEqual(amount);
		expect(wrapper.label()).toEqual(label);
		expect(wrapper.amountType())toEqual(amountType);
	});
});
