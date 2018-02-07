import React from 'react';
import {shallow} from 'enzyme';

import BudgetList from './budgetList';

describe('<BudgetList />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetList />);
	})
})
