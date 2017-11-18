import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

// Setup test case
// Call editExpense { note: 'New note value' }
// Make an assetion
test('Should setuup edit expense action object', () => {
    const action = editExpense("abc123", { note: 'New note value' });
    expect(action).toEqual({
        "id": "abc123",
        "type": "EDIT_EXPENSE",
        "updates": { 
            "note": 'New note value' 
        }
    })
});