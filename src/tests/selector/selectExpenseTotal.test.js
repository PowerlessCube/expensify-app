import selectExpenseTotal from '../../selectors/selectExpenseTotal';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const total = selectExpenseTotal();
    expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const total = selectExpenseTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpenseTotal(expenses);
    expect(total).toBe(114195);    
});
