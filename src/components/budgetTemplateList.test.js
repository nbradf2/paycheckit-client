import React from 'react';
import {shallow} from 'enzyme';

import BudgetTemplateList from './budgetTemplateList';

describe('<BudgetTemplateList />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetTemplateList />);
	})
})
