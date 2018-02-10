import React from 'react';
import {shallow} from 'enzyme';

import BudgetFullView from './budgetFullView';

describe('<BudgetFullView />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetFullView />);
	})
})
