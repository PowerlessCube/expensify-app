import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

// addExpense -> Water bill
const expenseOne = store.dispatch(addExpense({description: 'Water Bill', amount: 7000, createdAt: 21000}))

// addExpense -> Gas bill
const expenseTwo = store.dispatch(addExpense({description: 'Gas Bill', amount: 6000, createdAt: 21200}))
// setTextFilter -> bill (2 items) -> (1 items)
store.dispatch(setTextFilter('Bill'))

// getVisibleExpenses -> print visibles ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));