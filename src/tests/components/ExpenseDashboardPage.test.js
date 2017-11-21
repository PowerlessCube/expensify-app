import React from 'react';
import ExpenseDashBoardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';

test('should Render ExpenseDashBoardPage', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />)
    expect(wrapper).toMatchSnapshot();
});