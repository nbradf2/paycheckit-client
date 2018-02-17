import React from 'react';
import {shallow} from 'enzyme';

import AddBudgetCard from './addBudgetCard';

describe('<AddBudgetCard />', () => {
	it('Renders without crashing', () => {
		shallow(<AddBudgetCard />);
	})
})
