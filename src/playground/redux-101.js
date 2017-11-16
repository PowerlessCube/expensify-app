// To use redux we need to access createStore
import { createStore } from 'redux';

// Needs a func as first argument, which sets the state.  This is the default state object
const store = createStore((state = { count : 0 }, action) => {
    // Actions - change things in our store.
    switch (action.type) {
        // Convention capitalized snake case
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Sends off an action to the store
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

// Challenge - decremenetBy 10
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

