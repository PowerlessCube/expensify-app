// Return the total expenses e.g "3 expenses - cost = 120000
export default (expenses = []) => {
    if (expenses.length > 0) {
        return expenses.map((expense) => expense.amount)
            .reduce((sum, amount) => sum + amount);
    } else {
        return 0;
    }
};