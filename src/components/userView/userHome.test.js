import React from 'react';
import {shallow} from 'enzyme';

import UserHome from './userHome';

describe('<UserHome />', () => {
	it('Renders without crashing', () => {
		shallow(<UserHome />);
	})
})
