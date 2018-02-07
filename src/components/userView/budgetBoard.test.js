import React from 'react';
import {shallow} from 'enzyme';

import BudgetBoard from './budgetBoard';

describe('<BudgetBoard />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetBoard />);
	})
})
