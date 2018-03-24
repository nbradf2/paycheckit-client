import React from 'react';
import {shallow} from 'enzyme';

import {NavBarPublic} from './navBarPublic';

describe('<NavBarPublic />', () => {
	let links=['About', 'Login', 'Register']
	it('Renders without crashing', () => {
		shallow(<NavBarPublic />);
	})
})
