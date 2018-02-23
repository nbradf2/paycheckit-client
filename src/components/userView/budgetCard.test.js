import React from 'react';
import {shallow} from 'enzyme';

import BudgetCard from './budgetCard';

describe('<BudgetCard />', () => {
	let seedLists = [];
	beforeAll(() => {
		for (let i=0; i < 10; i++) {
			seedLists.push(`Entry ${i}`);
		}
	});
	
	it('Renders without crashing', () => {
		shallow(<BudgetCard />);
	})

	it('Renders the ledger entries', () => {
		const wrapper = shallow(<BudgetCard />);
		const instance = wrapper.instance();
		seedLists.forEach(instance);
		wrapper.update();
		const ledgerEntries = wrapper.find('LedgerEntries');
		expect(lists.length).toEqual(seedLists.length);
		const firstEntry = ledgerEntries.first();
		expect(firstEntry).toEqual(seedLists[0]);
	});
})
