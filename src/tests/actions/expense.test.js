import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

// Setup mock store for all testcases passing in any middle ware we might be using.
const createMockStore = configureMockStore([thunk])

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('Should setup edit expense action object', () => {
    const action = editExpense("abc123", { note: 'New note value' });
    expect(action).toEqual({
        id: "abc123",
        type: "EDIT_EXPENSE",
        updates: { 
            note: 'New note value' 
        }
    })
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        //Creating a promise chain the successful run of the above will trigger the start of the below.
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    };
    
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});