import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    // https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/simulate.md
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    // https://github.com/airbnb/enzyme/blob/master/docs/api/ReactWrapper/state.md
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New Description';
    // 1. Render expense form
    const wrapper = shallow(<ExpenseForm />);
    // 2. Change input for desc.
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    // 3. make an assertion that desc was set
    expect(wrapper.state('description')).toBe(value);
});

// should set note on textarea change.