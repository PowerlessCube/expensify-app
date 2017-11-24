# Build It: adding Total Selector

**Create Expenses-total.js and expenses-total.test.js**

```jsx
import selectExpensesTotal from '../../selectors/expenses-total.js';
// import from fixtures
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

const total = getExpensesTotal(expenses); // look into map and reduce use these two to add up numbers in an array of objects.

console.log(total); // 114195
```

## Tests to Create
- Should return 0 if no expenses
- Should correctly add up a single expense
- should correctly add up multiple expenses