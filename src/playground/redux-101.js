// To use redux we need to access createStore
import { createStore } from 'redux';

// Needs a func as first argument, which sets the state.  This is the default state object
const store = createStore((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
});

console.log(store.getState());

// Actions - change things in our store.

// increment, decrement, reset.
// Convention capitalized snake case
// Sends off an action to the store
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

// Reset - set the count equal to zero

store.dispatch({
    type: 'DECREMENT'
});

// How do I increment the count
// Or reset the count to zero


// we can get the state. by calling getState.
console.log(store.getState());