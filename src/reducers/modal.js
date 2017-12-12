const defaultState = {
    modalType: null,
    modalProps: {},
    isOpen: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps,
                isOpen: true
            }
        case 'HIDE_MODAL':
            return defaultState
        default:
            return state
    }
}