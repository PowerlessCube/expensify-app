// Return the total expenses e.g "3 expenses - cost = 120000
export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, amount) => sum + amount, 0);
};