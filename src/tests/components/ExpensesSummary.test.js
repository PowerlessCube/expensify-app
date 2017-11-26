import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render expensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2.35} />)
    expect(wrapper).toMatchSnapshot();
});

test('Should render expensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={235} expensesTotal={12341241235421243} />)
    expect(wrapper).toMatchSnapshot();
});