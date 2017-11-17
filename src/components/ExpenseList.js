import React from 'react';
// We call connect
import { connect } from 'react-redux';

// Regular unconnected component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
    </div>
);

// We define the things that we want to get form the store
// Some functions
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

// Connection to the store
// We get functions back from this so we have to call it. Hence the 

// and we define the component we want to connect to the store
export default connect(mapStateToProps)(ExpenseList);