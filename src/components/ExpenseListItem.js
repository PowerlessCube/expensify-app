import React from 'react';
import { connect } from 'react-redux';

// Export a stateless functional component
const ExpenseListItem = (props) => (
    <div>
        <p>{props.description}</p>
        <p>{props.amount}</p>
        <p>{props.createdAt}</p>
    </div>
);

export default ExpenseListItem;
// description, amount, createdAt