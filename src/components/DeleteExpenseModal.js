import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { hideModal } from '../actions/modal';
import { startRemoveExpense } from '../actions/expenses';

export class DeleteExpenseModal extends React.Component {
   
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <Modal
                isOpen={this.props.modal.isOpen}
                contentLabel="Delete Expense"
            >
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Delete {this.props.expense.name}?</h1>        
                    </div>
                </div>
                <div className="content-container">
                    <button 
                        className="button button--secondary"
                        onClick={this.onRemove}
                    >Remove Expense</button>
                    <button 
                        className="button button--secondary"
                        onClick={this.hideModal}
                    >Cancel</button>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    modal: state.modal
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteExpenseModal);