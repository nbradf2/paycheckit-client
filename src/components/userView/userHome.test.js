import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import UserHome from './userHome';

function renderWithStore(initialState, Component) {
	return(
		shallow(<Provider store={createStore(state => state, initialState)}>
					<Component />
				</Provider>)
	)
}

describe('<UserHome />', () => {
	it('Renders without crashing', () => {
		renderWithStore({auth: 
							{user: 
								{firstName: "Nicole", lastName: "Bradford"}}}, () => <UserHome />);
	})
})
