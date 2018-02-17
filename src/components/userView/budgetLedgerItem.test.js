import React from 'react';
import {shallow} from 'enzyme';

import BudgetLedgerItem from './budgetLedgerItem';

describe('<BudgetLedgerItem />', () => {
	it('Renders without crashing', () => {
		shallow(<BudgetLedgerItem />);
	})
})
