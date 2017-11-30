import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, {  type: '@@INIT' })
    expect(state).toEqual({});
});

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123asd'
    }
    const state = authReducer({}, action);
    expect(state).toEqual({ uid: action.uid });
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: '123asd'}, action);
    expect(state).toEqual({});
});