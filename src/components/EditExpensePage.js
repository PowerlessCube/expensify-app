import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';
import { showModal } from '../actions/modal';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        console.log(this.props);
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    showModal = (expense) => {
        console.log(this.props);
        this.props.showModal(expense)
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>        
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button 
                        className="button button--secondary"
                        onClick={this.showModal}
                    >Remove Expense</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    modal: state.modal
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    showModal: (expense) => dispatch(showModal(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);