import React from 'react';
import {shallow} from 'enzyme';

import AddBudgetForm from './addBudgetForm';

describe('<AddBudgetForm />', () => {
	it('Renders without crashing', () => {
		shallow(<AddBudgetForm />);
	})
})
