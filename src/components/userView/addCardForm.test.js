import React from 'react';
import {shallow} from 'enzyme';

import AddCardForm from './addCardForm';

describe('<AddCardForm />', () => {
	it('Renders without crashing', () => {
		shallow(<AddCardForm />);
	})
})
