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
})
