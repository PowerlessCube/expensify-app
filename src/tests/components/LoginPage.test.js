import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />)
});

test('should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

// LoginPage test file => should call startLogin on button click
test('should call startLogin on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});