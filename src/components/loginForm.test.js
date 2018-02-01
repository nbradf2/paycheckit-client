import React from 'react';
import {shallow} from 'enzyme';

import LoginForm from './loginForm';

describe('<LoginForm />', () => {
	it('Renders without crashing', () => {
		shallow(<LoginForm />);
	})
})
