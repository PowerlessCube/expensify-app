import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'asdfasdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
    }
};