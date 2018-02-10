import React from 'react';
import {shallow} from 'enzyme';

import BudgetCard from './budgetCard';

describe('<BudgetCard />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetCard />);
	})
})
