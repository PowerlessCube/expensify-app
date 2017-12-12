
export const showModal = (expense) => ({
    type: 'SHOW_MODAL',
    modalType: 'DELETE_POST',
    modalProps: expense
})

export const hideModal = () => ({
    type: 'HIDE_MODAL'
})