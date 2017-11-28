import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
    const state = expensesReducer(undefined, {  type: '@@INIT' })
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'take away',
        note: 'yum tum thai',
        amount: 5500,
        createdAt: moment(0).add(8, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const updates = {
        id: '2',
        description: 'Rent',
        note: 'New Note added',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], updates, expenses[2]])
});

test('should not edit expense if expense not found', () => {
    const updates = {
        id: '4',
        description: 'Rent',
        note: 'New Note added',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('Should set Expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});