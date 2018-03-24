import React from 'react';
import {shallow} from 'enzyme';

import {NavBarUser} from './navBarUser';

describe('<NavBarUser />', () => {
	let links=['My Budget', 'Add Budget']
	it('Renders without crashing', () => {
		shallow(<NavBarUser title="PaycheckIt" links={links} />);
	})
})
