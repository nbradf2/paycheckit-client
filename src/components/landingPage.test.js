import React from 'react';
import {shallow} from 'enzyme';

import LandingPage from './landingPage';

describe('<LandingPage />', () => {
	it('Renders without crashing', () => {
		shallow(<LandingPage />);
	})
})
