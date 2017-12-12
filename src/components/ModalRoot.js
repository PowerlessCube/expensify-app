import React from 'react';
import { connect } from 'react-redux';
import DeleteExpenseModal from './DeleteExpenseModal';

const MODAL_COMPONENTS = {
    'DELETE_POST': DeleteExpenseModal
}

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
        return <span />
    }

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
}

const mapState = state => state.modal;

export default connect(mapState)(ModalRoot)
