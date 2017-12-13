const defaultModalState = false;

export default (state = defaultModalState, action) => {
    switch(action.type) {
        case 'SHOW_MODAL':
            return true
        case 'CLOSE_MODAL':
            return false
        default:
            return state;
    }
}