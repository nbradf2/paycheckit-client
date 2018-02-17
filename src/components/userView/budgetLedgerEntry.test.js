import React from 'react';
import {shallow} from 'enzyme';

import BudgetLedgerEntry from './budgetLedgerEntry';

describe('<BudgetLedgerEntry />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetLedgerEntry />);
	})
})
