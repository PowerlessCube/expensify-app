import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';
import { showModal, closeModal } from '../actions/modal';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    showModal = () => {
        this.props.showModal();
    };

    closeModal = () => {
        this.props.closeModal();
    };

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
                <Modal 
                    isOpen={this.props.modal}
                    contentLabel="Delete Modal"
                    closeTimeoutMS={200}
                    className='modal'
                >
                    <div className="content-container">
                        <h2 className="modal__title">Do you wish to remove {this.props.expense.description}?</h2>
                        <div className="modal__content">
                            <button 
                                className="button" 
                                onClick={this.onRemove}                
                            >
                            Remove
                            </button>
                            <button 
                                className="button button--secondary"
                                onClick={this.closeModal}
                            >
                            Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
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
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    showModal: () => dispatch(showModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);